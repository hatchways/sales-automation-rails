class Api::CampaignsController < ApplicationController
  def show
    offset, limit = parse_pagination_params params[:page], params[:page_size]
    campaigns = Campaign.where(user_id: @user.id).offset(offset).limit(limit)
    total = Campaign.where(user_id: @user.id).count
    render json: {campaigns: campaigns, size: campaigns.length, total: total}
  end

  def create
    render json: Campaign.create({
      **campaign_params,
      user_id: @user.id,
    })
  end

  def campaign_params
    params.permit(:name)
  end
end
