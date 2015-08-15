# Realtime Markdown Editor

On this tutorial, I'm using Redis to store data. You have to installed Redis unless it throws ```Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED
```


### Install redis using Homebrew

```
$ brew install redis
```
After installation, you will see some notification about some caveats on configuring. Just leave it and continue to following some tasks on this article.

###Launch Redis on computer starts.
```
$ ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents
```

###Start Redis server via “launchctl”.
```
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```

###Start Redis server using configuration file.
```
$ redis-server /usr/local/etc/redis.conf
```

###Stop Redis on autostart on computer start.
```
$ launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```

###Location of Redis configuration file.
```
/usr/local/etc/redis.conf
```

###Uninstall Redis and its files.
```
$ brew uninstall redis
$ rm ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
```

###Get Redis package information.
```
$ brew info redis
```

###Test if Redis server is running.
```
$ redis-cli ping
```
If it replies “PONG”, then it’s good to go!