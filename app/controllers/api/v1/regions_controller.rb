class Api::V1::RegionsController < Api::ApiController
  def region_update
    if(region_params[:id] != "-1")
      Region.update_all active: false
      @region = Region.find_by(id: region_params[:id])
      @region.update(region_params)
    end
    render json: @region
  end

  private

  def region_params
    params.permit(:active, :region_nickname, :id)
  end
end
