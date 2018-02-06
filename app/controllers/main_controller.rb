class MainController < ApplicationController
  def index
    set_meta_tags title: t('main_offer'),
                  description: t('offer_2'),
                  keywords: t('meta_tags.keywords')
  end


  def about
  end

  def employers
  end

  def univs
  end

  def ico
  end

  def faq
  end
end
