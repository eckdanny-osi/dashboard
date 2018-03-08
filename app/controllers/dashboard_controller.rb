class DashboardController < SandboxBaseController
  def index
    @content = ContentService.load
    profile = session[:profile]
    # TODO: filter services by profile (roles?)
  end
end
