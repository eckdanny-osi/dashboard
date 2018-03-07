class DashboardController < SandboxBaseController
  def index

    data = YAML::load_file('config/content.yml')
    enabled = -> hash { hash['enabled'] }

    profile = session[:profile]
    # TODO: filter services by profile (roles?)

    @content = {
      :resources => data['resources']
        .select(&enabled),
      :services => data['services']
        .select(&enabled)
        .map do |hash|
          service_id = hash['id']
          url = ENV["#{service_id.upcase}_URL"] || false
          binding.pry
          hash['link']['href'] = url if url
          hash
        end,
    }

    @snapshot_url = ENV['SNAPSHOT_URL'] || ENV['INTAKE_URL'] || false
    @hotline_url = ENV['HOTLINE_URL'] || false
    @facility_url = ENV['FACILITY_URL'] || false
    @cals_url = ENV['CALS_URL'] || false

    @release_notes_url = ENV['RELEASE_NOTES_URL'] || 'https://github.com/ca-cwds/Sandbox/blob/master/Release%20Notes/release_notes.md'
    @job_aids_url = ENV['JOB_AIDS_URL'] || 'https://cwscms.osi.ca.gov/Portal/Digital-Services-Implementation-Portal/Training?folderId=1957'
  end
end
