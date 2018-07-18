task :start do
    exec 'cd client && foreman start -p 3000'
  end