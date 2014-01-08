PLEASE NOTE THE FACEBOOK GUIDELINES TO USING THIS SOFTWARE
===========================================================
[Page Guidelines](https://www.facebook.com/page_guidelines.php)

[Statement of Rights and Responsibilties](https://www.facebook.com/legal/terms)

As of January 8th 2014, under Facebook Pages Terms, Section II, Subsection C, there are explicit comments on collecting information automatically.

I am not a lawyer, this is not legal advice.

License
-------
This software is released under the [MIT](www.tldrlegal.com/license/mit-license) license.

A copy of the license file is attached to the source code.

-----------------------------------------------------------------------------------------

FB-Doge
=======

To the moon!

```
 much software
         such Javascript
     very complex
                  next-generation
       Facebook wow
```

Version
=======
0.0.1

Dependencies
============
[Redis](http://redis.io)

[NodeJS](http://nodejs.org)

[Compiled dogecoind](https://github.com/dogecoin/dogecoin)

Installation
============
Head to [Facebook](https://developers.facebook.com/tools/explorer/) to generate an oauth token with permissions: 
```friends_birthday, friends_status, manage_notifications, manage_pages, read_mailbox, read_page_mailboxes, user_events, user_friends, xmpp_login```

```bash
git clone <repo>
cd /path/to/repo
npm install
# Edit settings.js
vim settings.js
# Start redis server
/path/to/redis-server
# Make sure dogecoind is running in daemon mode with proper configuration set (rpcuser, rpcpass, etc..)
# Run server
node main.js
```
