---
title: "Systemd Timer Notları"
layout: post
tags: systemd
---

The second thing is that the timer does not trigger exactly on the minute at :00 seconds or even exactly one minute from the previous instance. This is intentional, but it can be overridden if necessary (or if it just offends your sysadmin sensibilities).

The reason for this behavior is to prevent multiple services from triggering at exactly the same time. For example, you can use time specifications such as Weekly, Daily, and more. These shortcuts are all defined to trigger at 00:00:00 hours on the day they are triggered. When multiple timers are specified this way, there is a strong likelihood that they would attempt to start simultaneously.

systemd timers are intentionally designed to trigger somewhat randomly around the specified time to try to prevent simultaneous triggers. They trigger semi-randomly within a time window that starts at the specified trigger time and ends at the specified time plus one minute. This trigger time is maintained at a stable position with respect to all other defined timer units, according to the systemd.timer man page. You can see in the journal entries above that the timer triggered immediately when it started and then about 46 or 47 seconds after each minute.

However, for some tasks, exact trigger times are an absolute requirement. For
those, you can specify greater trigger time-span accuracy (to within a
microsecond) by adding a statement like this to the Timer section of the timer
unit file:

AccuracySec=1us
Time spans can be used to specify the desired accuracy as well as to define
time spans for repeating or one-time events. It recognizes the following units:

usec, us, µs
msec, ms
seconds, second, sec, s
minutes, minute, min, m
hours, hour, hr, h
days, day, d
weeks, week, w
months, month, M (defined as 30.44 days)
years, year, y (defined as 365.25 days)
All the default timers in /usr/lib/systemd/system specify a much larger range
for accuracy because exact times are not critical. Look at some of the
specifications in the system-created timers:

[root@testvm1 system]# grep Accur /usr/lib/systemd/system/*timer
/usr/lib/systemd/system/fstrim.timer:AccuracySec=1h
/usr/lib/systemd/system/logrotate.timer:AccuracySec=1h
/usr/lib/systemd/system/logwatch.timer:AccuracySec=12h
/usr/lib/systemd/system/mlocate-updatedb.timer:AccuracySec=24h
/usr/lib/systemd/system/raid-check.timer:AccuracySec=24h
/usr/lib/systemd/system/unbound-anchor.timer:AccuracySec=24h
[root@testvm1 system]#
View the complete contents of some of the timer unit files in the
/usr/lib/systemd/system directory to see how they are constructed.

You do not have to enable the timer in this experiment to activate it at boot
time, but the command to do s

[//]: # ({% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %})
