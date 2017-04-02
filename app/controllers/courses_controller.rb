class CoursesController < ApplicationController

  def index
    @courses = Course.all
  end

  def show
    @course = Course.find(params[:id])
  end

  def search_courses
    @keywords = params[:text]
    @courses = Course.search_by_keywords(params[:text])
    if @keywords && !@keywords.blank?
      @courses = Course.search_by_keywords(params[:text])
    else
      @courses = Course.all
    end
  end
end
