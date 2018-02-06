source 'http://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "http://github.com/#{repo_name}.git"
end



gem 'rails', '~> 5.0.6'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'redis', '~> 3.0'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development


group :development do
  gem 'web-console', '>= 3.3.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'font-awesome-sass'
gem 'meta-tags'
gem 'russian'
gem 'bootstrap', '~> 4.0.0.beta'
gem 'popper_js'
gem 'sitemap_generator'
gem 'haml-rails'
gem 'pg', '~> 0.21'
gem 'meta-tags'
gem 'devise'
gem 'devise-i18n'

group :production do
  gem 'rails_12factor'
  gem 'heroku-deflater'
end
