Jekyll::Hooks.register :site, :pre_render do |site|
    site.data['favicon_sizes'] = [512,192,180,64,32,16]
end

Jekyll::Hooks.register :site, :post_write do |site|
    puts "      Generating favicons..."
    command = Gem.win_platform? ? 'magick' : 'convert'
    original = "#{site.source}/assets/img/favicon.png"
    system("#{command} #{original} -define icon:auto-resize=64,48,32,16 #{site.dest}/favicon.ico")
    site.data['favicon_sizes'].each do |size|
        system("#{command} #{original} -resize #{size}x#{size} #{site.dest}/assets/img/favicon#{size}x#{size}.png")
    end
end