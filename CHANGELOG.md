# pump.io changelog

pump.io follows [Semantic Versioning][semver].

## 2.1.0 beta 0 - 2016-12-11

### Fixed

* Files in bin/ are now properly validated by JSHint and JSCS

### Improved

* Enable strict mode for server-side JS (#1221)
* Provide a more useful error message for invalid config JSON
* A sample systemd service is now included

## 2.0.5 - 2016-12-11

### Fixed

* Fix web UI YouTube embeds appearing in all subsequent posts (#1249)

## 2.0.4 - 2016-11-13

### Fixed

* Fix To: and CC: fields not showing in the web UI
* Remove a stray debugger statement in the web UI JS

## 2.0.3 - 2016-11-13

### Fixed

* Certain template resource 404s in the web UI are now fixed

## 2.0.2 - 2016-11-13

### Fixed

* Jade client-side files are now included in registry packages
* The Server: header now reports the correct pump.io version

## 2.0.1 - 2016-11-10

### Fixed

* Updated some documentation version numbers

## 2.0.0 - 2016-11-10

No changes from 2.0.0 beta 2.

## 2.0.0 beta 2 - 2016-11-07

### Changed

* Fixed the web UI mangling some special characters when showing displayName properties

## 2.0.0 beta 1 - 2016-11-02

### Added

* A pump(1) manpage is now included
* Any internal web UI link with a `data-bypass` attribute is now ignored by the routing logic (useful for e.g. custom pages added by the admin)
* YouTube links in posts are now shown as  embeds by the web UI (#1158)

### Changed

* Node.js 0.10 and 0.12 support is now deprecated (#1212)
* TLS connections now use Mozilla's "intermediate" cipher suite and forces server cipher suite preferences (#1061)
* Adjusted the XSS error page wording based on user feedback

### Breaking

* Upgrade to Express 3.x (affects plugins)
* Templates are now based on Jade instead of utml (affects people who change the templates) (#1167)

## 1.0.0 - 2016-08-26

This release adds many security features. It's recommended that admins upgrade as soon as possible.

Please note that while we're not doing so _yet_, we're planning to deprecate running under Node.js 0.10 and 0.12 very soon. Additionally, upgrading to Node.js 4.x early will enable the new, better XSS scrubber - _however_, be aware that pump.io is far less tested under Node.js 4.x and you are likely to run into more bugs than you would under 0.10 or 0.12.

See #1184 for details.

### Added

* [API] Send the `Content-Length` header in Dialback requests
* Add support for [LibreJS][librejs] (#1058)
* Node.js 4.x is officially supported (#1184)
* Browser MIME type sniffing is disabled via `X-Content-Type-Options: nosniff` ([#1184][security-headers])
* Protect some versions of Internet Explorer from a confused deputy attack via `X-Download-Options: noopen` ([#1184][security-headers])
* Make sure Internet Explorer's built-in XSS protection is as secure as possible with `X-XSS-Protection: 1; mode=block` ([#1184][security-headers])
* Versions of Internet Explorer the XSS scrubber can't protect are presented with a security error instead of any content (#1184)
* Clickjacking is prevented via `X-Frame-Options: DENY` header (in addition to Content Security Policy) ([#1184][security-headers])
* A `Content-Security-Policy` header is sent with every response (#1184)
  * Scripts are forbidden from everywhere except the application domain and (if CDNs are enabled) `cdnjs.cloudflare.com` and `ajax.googleapis.com`
  * Styles are forbidden from everywhere except the application domain and inline styles
  * `<object>`, `<embed>`, and `<applet>`, as well as all plugins, are forbidden
  * Embedding the web UI via `<frame>`, `<iframe>`, `<object>`, `<embed>`, and `<applet>` is forbidden
  * Connecting to anything other than the application domain via `XMLHttpRequest`, WebSockets or `EventSource` is forbidden
  * Loading Web Workers or nested browsing contexts (i.e. `<frame>`, `<iframe>`) is forbidden except from the application domain
  * Fonts are forbidden from everywhere except the application domain
  * Form submission is limited to the application domain

### Changed

* [API] Don't return `displayName` properties if they're empty (#1149)
* Upgraded from Connect 1.x to Connect 2.x
* Upgraded various minor dependencies
* All files pass style checking and most pass JSHint
* Add links to the user guide on the homepage and welcome message (#1125)
* Add a new XSS scrubber implementation (#1184)
  * DOMPurify-based scrubber is used on Node.js 4.x or better
  * Otherwise, a more intrusive, less precise one is used

### Fixed

* Fix a crash upon access of an activity without any replies (#1135)
* Disable registration link if registration is disabled (#853)
* `package.json` now uses a valid SPDX license identifier (#1112)

## 0.3.0 - 2014-06-21

TODO

## 0.2.4 - 2013-07-24

TODO

## 0.2.3 - 2013-04-08

TODO

## 0.2.2 - 2013-04-03

TODO

## 0.2.1 - 2013-03-15

TODO

## 0.2.0 - 2013-02-28

TODO

## 0.1.1 - 2012-10-05

TODO

## 0.1.0 - 2012-10-03

### Added

* Initial release

 [semver]: http://semver.org/
 [librejs]: https://www.gnu.org/software/librejs/
 [security-headers]: https://github.com/pump-io/pump.io/issues/1184#issuecomment-242264403
