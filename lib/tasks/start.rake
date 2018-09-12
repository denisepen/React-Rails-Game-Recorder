task :start do
  exec 'foreman start -p 3000'
end

# react app boots up on 3008
# api boots up on 3009
