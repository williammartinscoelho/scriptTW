!function(e) {
    function t(a) {
        if (n[a])
            return n[a].exports;
        var r = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, t),
        r.l = !0,
        r.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.i = function(e) {
        return e
    }
    ,
    t.d = function(e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 7)
}([function(e, t, n) {
    "use strict";
    n.d(t, "h", function() {
        return a
    }),
    n.d(t, "l", function() {
        return r
    }),
    n.d(t, "c", function() {
        return i
    }),
    n.d(t, "k", function() {
        return c
    }),
    n.d(t, "g", function() {
        return u
    }),
    n.d(t, "i", function() {
        return o
    }),
    n.d(t, "j", function() {
        return d
    }),
    n.d(t, "f", function() {
        return l
    }),
    n.d(t, "a", function() {
        return s
    }),
    n.d(t, "d", function() {
        return m
    }),
    n.d(t, "e", function() {
        return f
    }),
    n.d(t, "b", function() {
        return p
    });
    var a = "plunder_list"
      , r = 2
      , i = 3
      , c = 4
      , u = 5
      , o = 6
      , d = 7
      , l = "@VILLAGES_DATA_KEY@"
      , s = "@CONFIGS_KEY@"
      , m = "@FE_VERSION_KEY@"
      , f = 2
      , p = {
        wall: 1,
        minCapacity: 80,
        minTime: 30,
        fullHaul: !1,
        hideRed: !1,
        desiredCapacity: 180,
        hideYellow: !1,
        decreasePerAttack: 0
    }
}
, function(e, t, n) {
    "use strict";
    var a = n(8);
    n.d(t, "c", function() {
        return a.a
    }),
    n.d(t, "e", function() {
        return a.b
    });
    var r = (n(9),
    n(10));
    n.d(t, "b", function() {
        return r.a
    });
    var i = n(11);
    n.d(t, "d", function() {
        return i.a
    });
    var c = n(12);
    n.d(t, "a", function() {
        return c.a
    })
}
, function(e, t, n) {
    "use strict";
    var a = n(5);
    n.d(t, "a", function() {
        return a.a
    })
}
, function(e, t, n) {
    "use strict";
    var a = n(15);
    n.d(t, "b", function() {
        return a.a
    });
    var r = n(16);
    n.d(t, "c", function() {
        return r.a
    });
    var i = n(17);
    n.d(t, "a", function() {
        return i.a
    });
    var c = n(14);
    n.d(t, "e", function() {
        return c.a
    });
    var u = n(13);
    n.d(t, "d", function() {
        return u.a
    })
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        return e.id
    }
    function r(e) {
        return e.getElementsByTagName("td")[g.c].innerText
    }
    function i(e) {
        for (var t = e.getElementsByTagName("td")[g.g].getElementsByTagName("span"), n = [], a = 0; a < t.length; a++)
            (t[a].className.indexOf("res") >= 0 || t[a].className.indexOf("warn") >= 0) && n.push(parseInt(t[a].innerText.replace(/\./g, "")));
        return {
            wood: n[0],
            stone: n[1],
            iron: n[2],
            total: n[0] + n[1] + n[2]
        }
    }
    function c(e) {
        return parseInt(e.getElementsByTagName("td")[g.i].innerText)
    }
    function u(e) {
        return parseFloat(e.getElementsByTagName("td")[g.j].innerText)
    }
    function o(e) {
        return e.getElementsByClassName("farm_icon farm_icon_a")[0]
    }
    function d(e) {
        return e.getElementsByClassName("farm_icon farm_icon_b")[0]
    }
    function l(e) {
        return e.getElementsByClassName("farm_icon farm_icon_c")[0]
    }
    function s(e) {
        return e.getElementsByTagName("td")[g.k]
    }
    function m(e) {
        var t = e.getElementsByTagName("td")[g.l].getElementsByTagName("img")[0];
        return t ? "https://dsbr.innogamescdn.com/8.86/33385/graphic/max_loot/1.png" === t.src : null
    }
    function f(e) {
        var t = e.getElementsByTagName("td")[g.c].getElementsByTagName("img")[0];
        return t ? parseInt(t.tooltipText) : 0
    }
    function p(e) {
        return {
            id: a(e),
            coords: r(e),
            resources: i(e),
            wall: c(e),
            distance: u(e),
            troopA: o(e),
            troopB: d(e),
            troopC: l(e),
            timeDOM: s(e),
            isFullHaul: m(e),
            attackCount: f(e),
            dom: e
        }
    }
    var g = n(0);
    t.a = p
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        for (var t = n.i(u.a)(r.h), a = [], o = n.i(i.e)(e), d = 0; d < t.length; d++) {
            var l = n.i(c.a)(t[d]);
            o && o[l.id] && (l.lastAttack = new Date(o[l.id])),
            a.push(l)
        }
        return a
    }
    t.a = a;
    var r = n(0)
      , i = n(1)
      , c = n(4)
      , u = n(6)
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        for (var t = document.getElementById(e), n = t.getElementsByTagName("tbody")[0], a = n.getElementsByTagName("tr"), r = [], i = 0; i < a.length; i++)
            a[i].id.indexOf("village") >= 0 && r.push(a[i]);
        return r
    }
    t.a = a
}
, function(e, t, n) {
    "use strict";
    function a() {
        n.i(u.a)(l),
        n.i(u.b)(l, s.decreasePerAttack),
        n.i(u.c)(l, s),
        n.i(u.d)(l)
    }
    function r(e) {
        s = e;
        try {
            window.localStorage.setItem(o.a, JSON.stringify(s))
        } catch (e) {}
        a()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(2)
      , c = n(1)
      , u = n(3)
      , o = n(0);
    n.i(c.a)();
    var d = game_data.village.id
      , l = n.i(i.a)(d)
      , s = void 0;
    if (window.localStorage && (n.i(c.b)(l, function(e) {
        n.i(c.c)(d, e),
        e.attackCount++,
        a()
    }),
    s = window.localStorage.getItem(o.a))) {
        s = JSON.parse(s);
        for (var m = Object.getOwnPropertyNames(o.b), f = 0; f < m.length; f++) {
            var p = m[f];
            void 0 !== s[p] && null !== s[p] || (s[p] = o.b[p])
        }
    }
    s || (s = o.b),
    n.i(u.e)(s, r),
    a()
}
, function(e, t, n) {
    "use strict";
    function a(e, t) {
        try {
            var n = window.localStorage.getItem(i.f);
            n = n ? JSON.parse(n) : {},
            n[e] || (n[e] = {}),
            n[e][t.id] = new Date,
            t.lastAttack = n[e][t.id],
            window.localStorage.setItem(i.f, JSON.stringify(n))
        } catch (e) {}
    }
    function r(e) {
        try {
            return JSON.parse(window.localStorage.getItem(i.f))[e]
        } catch (e) {
            return null
        }
    }
    t.a = a,
    t.b = r;
    var i = n(0)
}
, function(e, t, n) {
    "use strict"
}
, function(e, t, n) {
    "use strict";
    function a(e, t) {
        for (var n = 0; n < e.length; n++)
            if (e[n].id === t)
                return e[n];
        return null
    }
    function r(e, t) {
        var n = Accountmanager.farm;
        if (n.sendUnits.patched)
            return !1;
        var r = n.sendUnits.bind(n);
        return n.sendUnits = function(i, c, u) {
            return n.unitsAppearAvailableAB(u) && t(a(e, "village_" + c)),
            r(i, c, u)
        }
        ,
        n.sendUnits.patched = !0,
        !0
    }
    function i(e, t) {
        var n = Accountmanager.farm;
        return !n.sendUnitsFromReport.patched && (n.sendUnitsFromReport = function(n, r, i, c) {
            if ($(n).hasClass("farm_icon_disabled") || $(n).data("clickhappy_lock"))
                return 0;
            Accountmanager.farm.clickhappyLock($(n));
            var u = {
                report_id: i
            };
            return TribalWars.post(Accountmanager.send_units_link_from_report, null, u, function(n) {
                "string" == typeof n.success && (t(a(e, "village_" + r)),
                UI.SuccessMessage(n.success, 4e3)),
                Accountmanager.farm.updateOwnUnitsAvailable(n.current_units),
                $(".farm_village_" + r).addClass("farm_icon_disabled"),
                Accountmanager.farm.hide_attacked && Accountmanager.farm.updateNonAttacked(r)
            }),
            !1
        }
        ,
        n.sendUnitsFromReport.patched = !0,
        !0)
    }
    function c(e, t) {
        r(e, t),
        i(e, t)
    }
    t.a = c
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        var t = e.lastAttack.getTime()
          , n = (new Date).getTime()
          , a = n - t
          , r = a / 60 / 1e3;
        return Math.floor(r)
    }
    t.a = a
}
, function(e, t, n) {
    "use strict";
    function a() {
        var e = window.localStorage;
        if (e) {
            var t = e.getItem(r.d);
            t && JSON.parse(t) === r.e || ((e.getItem(r.f) || e.getItem(r.a)) && alert("FA_ENHANCER WAS UPDATED TO VERSION 2.0.0!"),
            e.removeItem(r.f),
            e.removeItem(r.a),
            e.setItem(r.d, r.e))
        }
    }
    t.a = a;
    var r = n(0)
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        e.forEach(function(e) {
            var t = e.dom.getElementsByTagName("td")[r.c]
              , n = t.getElementsByClassName("gen_attack_count")[0];
            n || (n = document.createElement("span"),
            n.className = "gen_attack_count",
            t.appendChild(n)),
            n.innerHTML = "<b>(" + e.attackCount + ")</b>"
        })
    }
    t.a = a;
    var r = n(0)
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        var t = document.createElement("h4")
          , n = document.createTextNode(e);
        return t.appendChild(n),
        t
    }
    function r(e, t, n) {
        var a = document.createElement("td");
        a.align = "center";
        var r = document.createElement("input");
        return "checkbox" !== n ? (r.size = "3",
        r.value = t) : r.checked = t,
        r.type = n || "text",
        r.id = e,
        a.appendChild(r),
        a
    }
    function i(e) {
        var t = e.wall
          , n = e.minCapacity
          , a = e.minTime
          , i = e.desiredCapacity
          , c = e.decreasePerAttack
          , u = e.hideRed
          , o = e.hideYellow
          , d = e.fullHaul
          , l = document.createElement("div")
          , s = document.createElement("table")
          , m = document.createElement("thead")
          , f = document.createElement("tr");
        ["WALL", "MIN TIME", "MIN CAPACITY", "DESIRED CAPACITY", "DECREASE PER ATTACK", "HIDE RED", "HIDE YELLOW", "FULL HAUL"].map(function(e) {
            var t = document.createElement("th");
            return t.style.textAlign = "center",
            t.style.width = "12.5%",
            t.innerText = e,
            t
        }).forEach(function(e) {
            return f.appendChild(e)
        }),
        m.appendChild(f),
        s.appendChild(m);
        var p = document.createElement("tbody")
          , g = document.createElement("tr");
        return g.appendChild(r("fe_wall", t)),
        g.appendChild(r("fe_min_time", a)),
        g.appendChild(r("fe_min_capacity", n)),
        g.appendChild(r("fe_desired_capacity", i)),
        g.appendChild(r("fe_decrease_per_attack", c)),
        g.appendChild(r("fe_hide_red", u, "checkbox")),
        g.appendChild(r("fe_hide_yellow", o, "checkbox")),
        g.appendChild(r("fe_full_haul", d, "checkbox")),
        p.appendChild(g),
        s.appendChild(p),
        l.appendChild(s),
        l
    }
    function c(e, t) {
        var n = document.createElement("div");
        n.style.padding = "5px";
        var a = document.createElement("button");
        a.innerText = e,
        a.className = "btn",
        a.addEventListener("click", t),
        n.appendChild(a);
        var r = document.createElement("a");
        return r.href = "https://forum.tribalwars.com.br/index.php?threads/farm-assistant-enchancer.334177/",
        r.style.marginLeft = "10px",
        r.innerText = "official thread",
        n.appendChild(r),
        n
    }
    function u() {
        return {
            wall: parseInt(document.getElementById("fe_wall").value),
            minCapacity: parseInt(document.getElementById("fe_min_capacity").value),
            minTime: parseInt(document.getElementById("fe_min_time").value),
            desiredCapacity: parseInt(document.getElementById("fe_desired_capacity").value),
            decreasePerAttack: parseInt(document.getElementById("fe_decrease_per_attack").value),
            hideRed: document.getElementById("fe_hide_red").checked,
            hideYellow: document.getElementById("fe_hide_yellow").checked,
            fullHaul: document.getElementById("fe_full_haul").checked
        }
    }
    function o(e, t) {
        return isNaN(e.wall) || e.wall < 0 ? alert("Wall is required and must be a value >= 0") : isNaN(e.minCapacity) || e.minCapacity < 0 ? alert("Min Capacity is required and must be a value >= 0") : isNaN(e.minTime) || e.minTime < 0 ? alert("Min time is required and must be a value >= 0") : isNaN(e.desiredCapacity) || e.desiredCapacity < 0 ? alert("Desired capacity is required and must be a value >= 0") : void t(e)
    }
    function d(e, t, n) {
        var r = document.createElement("DIV")
          , d = a(e)
          , l = i(t)
          , s = c("Save and render", function() {
            return o(u(), n)
        });
        return r.className = "vis",
        r.appendChild(d),
        r.appendChild(l),
        r.appendChild(s),
        r
    }
    function l(e) {
        var t = document.createElement("h3");
        return t.innerText = e,
        t
    }
    function s(e, t) {
        var n = document.getElementById("fe_container");
        if (n)
            for (; n.firstChild; )
                n.removeChild(n.firstChild);
        else {
            n = document.createElement("div"),
            n.id = "fe_container";
            var a = document.getElementById("content_value");
            a.insertBefore(n, a.firstChild)
        }
        n.appendChild(l("Farm Enhancer (v2.0.1)")),
        n.appendChild(d("Farm Enhancer Config Panel", e, t))
    }
    t.a = s
}
, function(e, t, n) {
    "use strict";
    function a(e, t) {
        e.forEach(function(e) {
            var n = e.dom.getElementsByTagName("td")
              , a = n[r.g].getElementsByClassName("gen_total")[0]
              , i = e.resources.total - e.attackCount * t;
            i < 0 && (i = 0),
            a ? a.innerHTML = "<b>(" + i + ")</b>" : n[r.g].innerHTML += '<span class="gen_total"><b>(' + i + ")</b></span>"
        })
    }
    t.a = a;
    var r = n(0)
}
, function(e, t, n) {
    "use strict";
    function a(e, t, a, r, i, c) {
        var o = e.resources.total - c * e.attackCount;
        return e.wall >= t || i && null !== e.isFullHaul && !e.isFullHaul || o < a || e.lastAttack && n.i(u.d)(e) < r
    }
    function r(e, t, n) {
        return e.resources.total - n * e.attackCount < t
    }
    function i(e, t) {
        for (var n = e.dom.getElementsByTagName("td"), a = 0; a < n.length; a++)
            n[a].style.backgroundColor = t
    }
    function c(e, t) {
        var n = t.wall
          , c = t.minCapacity
          , u = t.minTime
          , o = t.hideRed
          , d = t.desiredCapacity
          , l = t.hideYellow
          , s = t.fullHaul
          , m = t.decreasePerAttack;
        e.forEach(function(e) {
            a(e, n, c, u, s, m) ? o ? e.dom.style.display = "none" : (e.dom.style.display = "table-row",
            i(e, "#f44248")) : r(e, d, m) ? l ? e.dom.style.display = "none" : (e.dom.style.display = "table-row",
            i(e, "#d6cc46")) : (e.dom.style.display = "table-row",
            i(e, "#81d644"))
        })
    }
    t.a = c;
    var u = n(1)
}
, function(e, t, n) {
    "use strict";
    function a(e) {
        e.forEach(function(e) {
            if (e.lastAttack) {
                var t = n.i(r.d)(e)
                  , a = e.timeDOM.getElementsByClassName("last_atk_time")[0];
                a ? a.innerHTML = "<b>(" + t + " min)</b>" : e.timeDOM.innerHTML += '<span class="last_atk_time"><b>(' + t + " min)</b></span>"
            }
        })
    }
    t.a = a;
    var r = n(1)
}
]);
