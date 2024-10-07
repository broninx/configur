let onlyOnceLogStock = !0;
const scanner = function() {
  function X(F, x) {
    const A = {};
    if (null == document.body) {
      A.status = 599;
    } else {
      if (document.body.textContent.match("you're not a robot")) {
        A.status = 403;
      } else {
        for (var P = document.evaluate("//comment()", document, null, XPathResult.ANY_TYPE, null), N = P.iterateNext(), K = ""; N;) {
          K += N, N = P.iterateNext();
        }
        if (K.match(/automated access|api-services-support@/)) {
          A.status = 403;
        } else {
          if (K.match(/ref=cs_503_link/)) {
            A.status = 503;
          } else {
            if (F.scrapeFilters && 0 < F.scrapeFilters.length) {
              P = {};
              N = null;
              let H = "", g = null;
              const I = {};
              K = {};
              let Y = !1;
              const T = function(a, d, f) {
                var e = [];
                if (!a.selectors || 0 == a.selectors.length) {
                  if (!a.regExp) {
                    return H = "invalid selector, sel/regexp", !1;
                  }
                  e = document.getElementsByTagName("html")[0].innerHTML.match(new RegExp(a.regExp, "i"));
                  if (!e || e.length < a.reGroup) {
                    f = "regexp fail: html - " + a.name + f;
                    if (!1 === a.optional) {
                      return H = f, !1;
                    }
                    g += " // " + f;
                    return !0;
                  }
                  return e[a.reGroup];
                }
                let c = [];
                a.selectors.find(l => {
                  l = d.querySelectorAll(l);
                  return 0 < l.length ? (c = l, !0) : !1;
                });
                if (0 === c.length) {
                  if (!0 === a.optional) {
                    return !0;
                  }
                  H = "selector no match: " + a.name + f;
                  return !1;
                }
                if (a.parentSelector && (c = [c[0].parentNode.querySelector(a.parentSelector)], null == c[0])) {
                  if (!0 === a.optional) {
                    return !0;
                  }
                  H = "parent selector no match: " + a.name + f;
                  return !1;
                }
                if ("undefined" != typeof a.multiple && null != a.multiple && (!0 === a.multiple && 1 > c.length || !1 === a.multiple && 1 < c.length)) {
                  if (!Y) {
                    return Y = !0, T(a, d, f);
                  }
                  f = "selector multiple mismatch: " + a.name + f + " found: " + c.length;
                  if (!1 === a.optional) {
                    a = "";
                    for (var h in c) {
                      !c.hasOwnProperty(h) || 1000 < a.length || (a += " - " + h + ": " + c[h].outerHTML + " " + c[h].getAttribute("class") + " " + c[h].getAttribute("id"));
                    }
                    H = f + a + " el: " + d.getAttribute("class") + " " + d.getAttribute("id");
                    return !1;
                  }
                  g += " // " + f;
                  return !0;
                }
                if (a.isListSelector) {
                  return I[a.name] = c, !0;
                }
                if (!a.attribute) {
                  return H = "selector attribute undefined?: " + a.name + f, !1;
                }
                for (let l in c) {
                  if (c.hasOwnProperty(l)) {
                    var k = c[l];
                    if (!k) {
                      break;
                    }
                    if (a.childNode) {
                      a.childNode = Number(a.childNode);
                      h = k.childNodes;
                      if (h.length < a.childNode) {
                        f = "childNodes fail: " + h.length + " - " + a.name + f;
                        if (!1 === a.optional) {
                          return H = f, !1;
                        }
                        g += " // " + f;
                        return !0;
                      }
                      k = h[a.childNode];
                    }
                    h = null;
                    h = "text" == a.attribute ? k.textContent : "html" == a.attribute ? k.innerHTML : k.getAttribute(a.attribute);
                    if (!h || 0 == h.length || 0 == h.replace(/(\r\n|\n|\r)/gm, "").replace(/^\s+|\s+$/g, "").length) {
                      f = "selector attribute null: " + a.name + f;
                      if (!1 === a.optional) {
                        return H = f, !1;
                      }
                      g += " // " + f;
                      return !0;
                    }
                    if (a.regExp) {
                      k = h.match(new RegExp(a.regExp, "i"));
                      if (!k || k.length < a.reGroup) {
                        f = "regexp fail: " + h + " - " + a.name + f;
                        if (!1 === a.optional) {
                          return H = f, !1;
                        }
                        g += " // " + f;
                        return !0;
                      }
                      e.push(k[a.reGroup]);
                    } else {
                      e.push(h);
                    }
                    if (!a.multiple) {
                      break;
                    }
                  }
                }
                a.multiple || (e = e[0]);
                return e;
              };
              let D = document, b = !1;
              for (let a in F.scrapeFilters) {
                if (b) {
                  break;
                }
                let d = F.scrapeFilters[a], f = d.pageVersionTest;
                var r = [], u = !1;
                for (const e of f.selectors) {
                  if (r = document.querySelectorAll(e), 0 < r.length) {
                    u = !0;
                    break;
                  }
                }
                if (u) {
                  if ("undefined" != typeof f.multiple && null != f.multiple) {
                    if (!0 === f.multiple && 2 > r.length) {
                      continue;
                    }
                    if (!1 === f.multiple && 1 < r.length) {
                      continue;
                    }
                  }
                  if (f.attribute && (u = null, u = "text" == f.attribute ? "" : r[0].getAttribute(f.attribute), null == u)) {
                    continue;
                  }
                  N = a;
                  for (let e in d) {
                    if (b) {
                      break;
                    }
                    r = d[e];
                    if (r.name != f.name) {
                      if (r.parentList) {
                        u = [];
                        if ("undefined" != typeof I[r.parentList]) {
                          u = I[r.parentList];
                        } else {
                          if (!0 === T(d[r.parentList], D, a)) {
                            u = I[r.parentList];
                          } else {
                            break;
                          }
                        }
                        K[r.parentList] || (K[r.parentList] = []);
                        for (let c in u) {
                          if (b) {
                            break;
                          }
                          if (!u.hasOwnProperty(c)) {
                            continue;
                          }
                          let h = T(r, u[c], a);
                          if (!1 === h) {
                            b = !0;
                            break;
                          }
                          if (!0 !== h) {
                            if (K[r.parentList][c] || (K[r.parentList][c] = {}), r.multiple) {
                              for (let k in h) {
                                h.hasOwnProperty(k) && !r.keepBR && (h[k] = h[k].replace(/(\r\n|\n|\r)/gm, " ").replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " "));
                              }
                              h = h.join("\u271c\u271c");
                              K[r.parentList][c][r.name] = h;
                            } else {
                              K[r.parentList][c][r.name] = r.keepBR ? h : h.replace(/(\r\n|\n|\r)/gm, " ").replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ");
                            }
                          }
                        }
                      } else {
                        u = T(r, D, a);
                        if (!1 === u) {
                          b = !0;
                          break;
                        }
                        if (!0 !== u) {
                          if (r.multiple) {
                            for (let c in u) {
                              u.hasOwnProperty(c) && !r.keepBR && (u[c] = u[c].replace(/(\r\n|\n|\r)/gm, " ").replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " "));
                            }
                            u = u.join();
                          } else {
                            r.keepBR || (u = u.replace(/(\r\n|\n|\r)/gm, " ").replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " "));
                          }
                          P[r.name] = u;
                        }
                      }
                    }
                  }
                  b = !0;
                }
              }
              if (null == N) {
                H += " // no pageVersion matched", A.status = 308, A.payload = [g, H, F.dbg1 ? document.getElementsByTagName("html")[0].innerHTML : ""];
              } else {
                if ("" === H) {
                  A.payload = [g];
                  A.scrapedData = P;
                  for (let a in K) {
                    A[a] = K[a];
                  }
                } else {
                  A.status = 305, A.payload = [g, H, F.dbg2 ? document.getElementsByTagName("html")[0].innerHTML : ""];
                }
              }
            } else {
              A.status = 306;
            }
          }
        }
      }
    }
    x(A);
  }
  let Z = !0;
  window.self === window.top && (Z = !1);
  window.sandboxHasRun && (Z = !1);
  Z && (window.sandboxHasRun = !0, window.addEventListener("message", function(F) {
    if (F.source == window.parent && F.data && (F.origin == "chrome-extension://" + chrome.runtime.id || F.origin.startsWith("moz-extension://") || F.origin.startsWith("safari-extension://"))) {
      var x = F.data.value;
      "data" == F.data.key && x.url && x.url == document.location && setTimeout(function() {
        null == document.body ? setTimeout(function() {
          X(x, function(A) {
            window.parent.postMessage({sandbox:A}, "*");
          });
        }, 1500) : X(x, function(A) {
          window.parent.postMessage({sandbox:A}, "*");
        });
      }, 800);
    }
  }, !1), window.parent.postMessage({sandbox:document.location + "", isUrlMsg:!0}, "*"));
  window.addEventListener("error", function(F, x, A, P, N) {
    "ipbakfmnjdenbmoenhicfmoojdojjjem" != chrome.runtime.id && "blfpbjkajgamcehdbehfdioapoiibdmc" != chrome.runtime.id || console.log(N);
    return !1;
  });
  return {scan:X};
}();
(function() {
  let X = !1, Z = !1;
  const F = window.opera || -1 < navigator.userAgent.indexOf(" OPR/");
  var x = -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
  const A = -1 < navigator.userAgent.toLowerCase().indexOf("edge/"), P = /Apple Computer/.test(navigator.vendor) && /Safari/.test(navigator.userAgent), N = !F && !x && !A & !P, K = x ? "Firefox" : P ? "Safari" : N ? "Chrome" : F ? "Opera" : A ? "Edge" : "Unknown", r = chrome.runtime.getManifest().version;
  let u = !1;
  try {
    u = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
  } catch (b) {
  }
  if (!window.keepaHasRun) {
    window.keepaHasRun = !0;
    var H = 0;
    chrome.runtime.onMessage.addListener((b, a, d) => {
      switch(b.key) {
        case "updateToken":
          g.iframeStorage ? g.iframeStorage.contentWindow.postMessage({origin:"keepaContentScript", key:"updateTokenWebsite", value:b.value}, g.iframeStorage.src) : window.postMessage({origin:"keepaContentScript", key:"updateTokenWebsite", value:b.value}, "*");
      }
    });
    window.addEventListener("message", function(b) {
      if ("undefined" == typeof b.data.sandbox) {
        if ("https://keepa.com" == b.origin || "https://test.keepa.com" == b.origin || "https://dyn.keepa.com" == b.origin) {
          if (b.data.hasOwnProperty("origin") && "keepaIframe" == b.data.origin) {
            g.handleIFrameMessage(b.data.key, b.data.value, function(a) {
              try {
                b.source.postMessage({origin:"keepaContentScript", key:b.data.key, value:a, id:b.data.id}, b.origin);
              } catch (d) {
              }
            });
          } else {
            if ("string" === typeof b.data) {
              const a = b.data.split(",");
              if (2 > a.length) {
                return;
              }
              if (2 < a.length) {
                let d = 2;
                const f = a.length;
                for (; d < f; d++) {
                  a[1] += "," + a[d];
                }
              }
              g.handleIFrameMessage(a[0], a[1], function(d) {
                b.source.postMessage({origin:"keepaContentScript", value:d}, b.origin);
              });
            }
          }
        }
        if (b.origin.match(/^https?:\/\/.*?\.amazon\.(de|com|co\.uk|co\.jp|jp|ca|fr|es|nl|it|in|com\.mx|com\.br)/)) {
          let a;
          try {
            a = JSON.parse(b.data);
          } catch (d) {
            return;
          }
          (a = a.asin) && /^([BC][A-Z0-9]{9}|\d{9}(!?X|\d))$/.test(a.trim()) && (a != g.ASIN ? (g.ASIN = a, g.swapIFrame()) : 0 != H ? (window.clearTimeout(H), H = 1) : H = window.setTimeout(function() {
            g.swapIFrame();
          }, 1000));
        }
      }
    });
    var g = {domain:0, iframeStorage:null, ASIN:null, tld:"", placeholder:"", cssFlex:function() {
      let b = "flex";
      const a = ["flex", "-webkit-flex", "-moz-box", "-webkit-box", "-ms-flexbox"], d = document.createElement("flexelement");
      for (let f in a) {
        try {
          if ("undefined" != d.style[a[f]]) {
            b = a[f];
            break;
          }
        } catch (e) {
        }
      }
      return b;
    }(), getDomain:function(b) {
      switch(b) {
        case "com":
          return 1;
        case "co.uk":
          return 2;
        case "de":
          return 3;
        case "fr":
          return 4;
        case "co.jp":
          return 5;
        case "jp":
          return 5;
        case "ca":
          return 6;
        case "it":
          return 8;
        case "es":
          return 9;
        case "in":
          return 10;
        case "com.mx":
          return 11;
        case "com.br":
          return 12;
        case "com.au":
          return 13;
        case "nl":
          return 14;
        default:
          return -1;
      }
    }, revealWorking:!1, juvecOnlyOnce:!1, revealMapOnlyOnce:!1, revealCache:{}, revealMAP:function() {
      g.revealMapOnlyOnce || (g.revealMapOnlyOnce = !0, chrome.runtime?.id && chrome.runtime.sendMessage({type:"isPro"}, b => {
        if (null === b.value) {
          console.log("stock data fail");
        } else {
          var a = b.amazonSellerIds, d = b.stockData, f = !0 === b.value, e = c => {
            c = c.trim();
            let h = d.amazonNames[c];
            return h ? "W" === h ? d.warehouseIds[g.domain] : "A" === h ? d.amazonIds[g.domain] : h : (c = c.match(new RegExp(d.sellerId))) && c[1] ? c[1] : null;
          };
          chrome.storage.local.get("revealStock", function(c) {
            "undefined" == typeof c && (c = {});
            let h = !0;
            try {
              h = "0" != c.revealStock;
            } catch (q) {
            }
            onlyOnceLogStock && (onlyOnceLogStock = !1, console.log("Stock " + f + " " + h));
            try {
              if ((h || "com" == g.tld) && !g.revealWorking) {
                if (g.revealWorking = !0, document.getElementById("keepaMAP")) {
                  g.revealWorking = !1;
                } else {
                  var k = function() {
                    const q = new MutationObserver(function(B) {
                      setTimeout(function() {
                        g.revealMAP();
                      }, 100);
                      try {
                        q.disconnect();
                      } catch (t) {
                      }
                    });
                    q.observe(document.getElementById("keepaMAP").parentNode.parentNode.parentNode, {childList:!0, subtree:!0});
                  }, l = (q, B, t, w, C, y, G, L, Q, U) => {
                    if ("undefined" == typeof g.revealCache[w] || null == q.parentElement.querySelector(".keepaStock")) {
                      null == L && (L = a[g.domain]);
                      var R = "" == q.id && "aod-pinned-offer" == q.parentNode.id;
                      y = y || R;
                      try {
                        t = t || -1 != q.textContent.toLowerCase().indexOf("to cart to see") || !y && /(our price|always remove it|add this item to your cart|see product details in cart|see price in cart)/i.test(document.getElementById("price").textContent);
                      } catch (n) {
                      }
                      if (t || f) {
                        p(q, B, t, w, y);
                        var M = n => {
                          const S = document.getElementById("keepaStock" + w);
                          if (null != S) {
                            S.innerHTML = "";
                            if (null != n && null != n.price && t) {
                              var O = document.createElement("div");
                              n = 5 == g.domain ? n.price : (Number(n.price) / 100).toFixed(2);
                              var W = new Intl.NumberFormat(" en-US en-GB de-DE fr-FR ja-JP en-CA zh-CN it-IT es-ES hi-IN es-MX pt-BR en-AU nl-NL tr-TR".split(" ")[g.domain], {style:"currency", currency:" USD GBP EUR EUR JPY CAD CNY EUR EUR INR MXN BRL AUD EUR TRY".split(" ")[g.domain]});
                              0 < n && (O.innerHTML = 'Price&emsp;&ensp;<span style="font-weight: bold;">' + W.format(n) + "</span>");
                              S.parentNode.parentNode.parentNode.prepend(O);
                            }
                            f && (n = g.revealCache[w].stock, 999 == n ? n = "999+" : 1000 == n ? n = "1000+" : -3 == g.revealCache[w].price || 30 != n && !Q || (n += "+"), O = document.createElement("span"), O.style = "font-weight: bold;", O.innerText = n + " ", n = document.createElement("span"), n.style = "color: #dedede;", n.innerText = " (revealed by \u271c Keepa)", W = document.createElement("span"), W.style = "color:#da4c33;", W.innerText = " order limit", S.appendChild(O), g.revealCache[w].limit && 
                            (0 < g.revealCache[w].orderLimit && (W.innerText += ": " + g.revealCache[w].orderLimit), S.appendChild(W)), y && S.appendChild(n));
                          }
                        };
                        if ("undefined" != typeof g.revealCache[w] && -1 != g.revealCache[w]) {
                          "pending" != g.revealCache[w] && M(g.revealCache[w]);
                        } else {
                          g.revealCache[w] = "pending";
                          R = q = "";
                          try {
                            q = document.querySelector("meta[name=encrypted-slate-token]").getAttribute("content"), R = document.querySelector("#aod-offer-list input#aod-atc-csrf-token").getAttribute("value");
                          } catch (n) {
                          }
                          chrome.runtime?.id && chrome.runtime.sendMessage({type:"getStock", asin:B, oid:w, sellerId:L, maxQty:G, hasPlus:Q, isMAP:t, host:document.location.hostname, force:t, referer:document.location + "", domainId:g.domain, cachedStock:g.revealCache[L], offscreen:!1, atcCsrf:R || U, slateToken:q, session:C}, n => {
                            if ("undefined" == typeof n || null == n || !1 === n?.stock) {
                              if (n = document.getElementById("keepaMAP")) {
                                n.innerHTML = "";
                              }
                            } else {
                              if (n.error) {
                                const S = document.getElementById("keepaStock" + w);
                                S.innerHTML = "";
                                const O = document.createElement("span");
                                O.style = "color:#e8c7c1;";
                                O.innerText = "error(" + n.errorCode + ")";
                                O.title = n.error + ". Contact info@keepa.com with a screenshot & URL for assistance.";
                                S.appendChild(O);
                                console.log(n.error);
                              } else {
                                g.revealCache[w] = n, g.revealCache[L] = n, M(n);
                              }
                            }
                          });
                        }
                      }
                    }
                  }, p = (q, B, t, w, C) => {
                    B = "" == q.id && "aod-pinned-offer" == q.parentNode.id;
                    var y = (C ? q.parentElement : q).querySelector(".keepaMAP");
                    if (null == (C ? q.parentElement : q).querySelector(".keepaStock")) {
                      null != y && null != y.parentElement && y.parentElement.remove();
                      var G = C ? "165px" : "55px;height:20px;";
                      y = document.createElement("div");
                      y.id = "keepaMAP" + (C ? t + w : "");
                      y.className = "a-section a-spacing-none a-spacing-top-micro aod-clear-float keepaStock";
                      t = document.createElement("div");
                      t.className = "a-fixed-left-grid";
                      var L = document.createElement("div");
                      L.style = "padding-left:" + G;
                      C && (L.className = "a-fixed-left-grid-inner");
                      var Q = document.createElement("div");
                      Q.style = "width:" + G + ";margin-left:-" + G + ";float:left;";
                      Q.className = "a-fixed-left-grid-col aod-padding-right-10 a-col-left";
                      G = document.createElement("div");
                      G.style = "padding-left:0%;float:left;";
                      G.className = "a-fixed-left-grid-col a-col-right";
                      var U = document.createElement("span");
                      U.className = "a-size-small a-color-tertiary";
                      var R = document.createElement("span");
                      R.style = "color: #dedede;";
                      R.innerText = "loading\u2026";
                      var M = document.createElement("span");
                      M.className = "a-size-small a-color-base";
                      M.id = "keepaStock" + w;
                      M.appendChild(R);
                      G.appendChild(M);
                      Q.appendChild(U);
                      L.appendChild(Q);
                      L.appendChild(G);
                      t.appendChild(L);
                      y.appendChild(t);
                      U.className = "a-size-small a-color-tertiary";
                      g.revealWorking = !1;
                      f && (U.innerText = "Stock");
                      C ? B ? (q = document.querySelector("#aod-pinned-offer-show-more-link"), 0 == q.length && document.querySelector("#aod-pinned-offer-main-content-show-more"), q.prepend(y)) : q.parentNode.insertBefore(y, q.parentNode.children[q.parentNode.children.length - 1]) : q.appendChild(y);
                      C || k();
                    }
                  }, m = document.location.href, v = new MutationObserver(function(q) {
                    try {
                      let C = document.querySelectorAll("#aod-offer,#aod-pinned-offer");
                      if (null != C && 0 != C.length) {
                        q = null;
                        var B = C[0].querySelector('input[name="session-id"]');
                        if (B) {
                          q = B.getAttribute("value");
                        } else {
                          if (B = document.querySelector("#session-id")) {
                            q = document.querySelector("#session-id").value;
                          }
                        }
                        if (!q) {
                          var t = document.querySelectorAll("script");
                          for (var w of t) {
                            let y = w.text.match("ue_sid.?=.?'([0-9-]{19})'");
                            y && (q = y[1]);
                          }
                        }
                        if (q) {
                          for (let y in C) {
                            if (!C.hasOwnProperty(y)) {
                              continue;
                            }
                            const G = C[y];
                            if (null != G && "DIV" == G.nodeName) {
                              let L;
                              B = 999;
                              let Q = G.querySelector('input[name="offeringID.1"]');
                              if (Q) {
                                L = Q.getAttribute("value");
                              } else {
                                try {
                                  let M = JSON.parse(G.querySelectorAll("[data-aod-atc-action]")[0].dataset.aodAtcAction);
                                  L = M.oid;
                                  B = M.maxQty;
                                } catch (M) {
                                  try {
                                    let n = JSON.parse(G.querySelectorAll("[data-aw-aod-cart-api]")[0].dataset.awAodCartApi);
                                    L = n.oid;
                                    B = n.maxQty;
                                  } catch (n) {
                                  }
                                }
                              }
                              if (!L) {
                                continue;
                              }
                              const U = G.children[0];
                              t = null;
                              if (d) {
                                for (w = 0; w < d.soldByOffers.length; w++) {
                                  let M = G.querySelector(d.soldByOffers[w]);
                                  if (null == M) {
                                    continue;
                                  }
                                  t = e(M.innerText);
                                  if (null != t) {
                                    break;
                                  }
                                  let n = M.getAttribute("href");
                                  null == n && (n = M.innerHTML);
                                  t = e(n);
                                  if (null != t) {
                                    break;
                                  }
                                }
                              }
                              const R = -1 != G.textContent.toLowerCase().indexOf("add to cart to see product details.");
                              l(U, g.ASIN, R, L, q, !0, B, t);
                            }
                          }
                        } else {
                          console.error("missing sessionId");
                        }
                      }
                    } catch (C) {
                      console.log(C), g.reportBug(C, "MAP error: " + m);
                    }
                  });
                  v.observe(document.querySelector("body"), {childList:!0, attributes:!1, characterData:!1, subtree:!0, attributeOldValue:!1, characterDataOldValue:!1});
                  window.onunload = function B() {
                    try {
                      window.detachEvent("onunload", B), v.disconnect();
                    } catch (t) {
                    }
                  };
                  var z = document.querySelector(d.soldOfferId);
                  c = null;
                  if (d) {
                    var E = document.querySelector(d.soldByBBForm);
                    E && (c = E.getAttribute("value"));
                    if (null == c) {
                      for (E = 0; E < d.soldByBB.length; E++) {
                        var J = document.querySelector(d.soldByBB[E]);
                        if (null != J && (c = e(J.innerHTML), null != c)) {
                          break;
                        }
                      }
                    }
                  }
                  if (null != z && null != z.value) {
                    var V = z.parentElement.querySelector("#session-id");
                    const B = z.parentElement.querySelector("#ASIN"), t = z.parentElement.querySelector("#selectQuantity #quantity > option:last-child");
                    let w = z.parentElement.querySelector('input[name*="CSRF" i]')?.getAttribute("value");
                    if (null != V && null != B) {
                      for (J = 0; J < d.mainEl.length; J++) {
                        let C = document.querySelector(d.mainEl[J]);
                        if (null != C) {
                          E = J = !1;
                          if (null != t) {
                            try {
                              0 < t.innerText.indexOf("+") && (E = !0), J = Number("" == t.value ? t.innerText.replaceAll("+", "") : t.value);
                            } catch (y) {
                              console.log(y);
                            }
                          }
                          l(C, B.value, !1, z.value, V.value, !1, J, c, E, w);
                          break;
                        }
                      }
                    }
                  }
                  var aa = document.getElementById("price");
                  if (null != aa && /(our price|always remove it|add this item to your cart|see product details in cart|see price in cart)/i.test(aa.textContent)) {
                    let B = document.getElementById("merchant-info");
                    V = z = "";
                    if (B) {
                      if (-1 == B.textContent.toLowerCase().indexOf("amazon.c")) {
                        const t = aa.querySelector('span[data-action="a-modal"]');
                        if (t) {
                          var ba = t.getAttribute("data-a-modal");
                          ba.match(/offeringID\.1=(.*?)&amp/) && (z = RegExp.$1);
                        }
                        if (0 == z.length) {
                          if (ba.match('map_help_pop_(.*?)"')) {
                            V = RegExp.$1;
                          } else {
                            g.revealWorking = !1;
                            return;
                          }
                        }
                      }
                      if (null != z && 10 < z.length) {
                        const t = document.querySelector("#session-id");
                        l(aa, g.ASIN, !1, z, t.value, !1, !1, V);
                      }
                    } else {
                      g.revealWorking = !1;
                    }
                  } else {
                    g.revealWorking = !1;
                  }
                }
              }
            } catch (q) {
              g.revealWorking = !1, console.log(q);
            }
          });
        }
      }));
    }, onPageLoad:function() {
      g.tld = RegExp.$1;
      const b = RegExp.$3;
      g.ASIN || (g.ASIN = b);
      g.domain = g.getDomain(g.tld);
      chrome.storage.local.get(["s_boxType", "s_boxOfferListing"], function(a) {
        "undefined" == typeof a && (a = {});
        document.addEventListener("DOMContentLoaded", function(d) {
          d = document.getElementsByTagName("head")[0];
          const f = document.createElement("script");
          f.type = "text/javascript";
          f.src = chrome.runtime.getURL("selectionHook.js");
          d.appendChild(f);
          "0" == a.s_boxType ? g.swapIFrame() : g.getPlaceholderAndInsertIFrame((e, c) => {
            if (void 0 !== e) {
              c = document.createElement("div");
              c.setAttribute("id", "keepaButton");
              c.setAttribute("style", "    background-color: #444;\n    border: 0 solid #ccc;\n    border-radius: 6px 6px 6px 6px;\n    color: #fff;\n    cursor: pointer;\n    font-size: 12px;\n    margin: 15px;\n    padding: 6px;\n    text-decoration: none;\n    text-shadow: none;\n    display: flex;\n    box-shadow: 0px 0px 7px 0px #888;\n    width: 100px;\n    background-repeat: no-repeat;\n    height: 32px;\n    background-position-x: 7px;\n    background-position-y: 7px;\n    text-align: center;\n    background-image: url(https://cdn.keepa.com/img/logo_circled_w.svg);\n    background-size: 80px;");
              var h = document.createElement("style");
              h.appendChild(document.createTextNode("#keepaButton:hover{background-color:#666 !important}"));
              document.head.appendChild(h);
              c.addEventListener("click", function() {
                const k = document.getElementById("keepaButton");
                k.parentNode.removeChild(k);
                g.swapIFrame();
              }, !1);
              e.parentNode.insertBefore(c, e);
            }
          });
        }, !1);
      });
    }, swapIFrame:function() {
      if ("com.au" == g.tld) {
        try {
          g.revealMAP(document, g.ASIN, g.tld), g.revealMapOnlyOnce = !1;
        } catch (a) {
        }
      } else {
        if (!document.getElementById("keepaButton")) {
          g.swapIFrame.swapTimer && clearTimeout(g.swapIFrame.swapTimer);
          g.swapIFrame.swapTimer = setTimeout(function() {
            if (!u) {
              document.getElementById("keepaContainer") || g.getPlaceholderAndInsertIFrame(g.insertIFrame);
              try {
                g.revealMAP(document, g.ASIN, g.tld), g.revealMapOnlyOnce = !1;
              } catch (a) {
              }
              g.swapIFrame.swapTimer = setTimeout(function() {
                document.getElementById("keepaContainer") || g.getPlaceholderAndInsertIFrame(g.insertIFrame);
              }, 2000);
            }
          }, 2000);
          var b = document.getElementById("keepaContainer");
          if (null != g.iframeStorage && b) {
            try {
              g.iframeStorage.contentWindow.postMessage({origin:"keepaContentScript", key:"updateASIN", value:{d:g.domain, a:g.ASIN, eType:K, eVersion:r, url:document.location.href}}, "*");
            } catch (a) {
              console.error(a);
            }
          } else {
            g.getPlaceholderAndInsertIFrame(g.insertIFrame);
            try {
              g.revealMAP(document, g.ASIN, g.tld), g.revealMapOnlyOnce = !1;
            } catch (a) {
            }
          }
        }
      }
    }, getDevicePixelRatio:function() {
      let b = 1;
      void 0 !== window.screen.systemXDPI && void 0 !== window.screen.logicalXDPI && window.screen.systemXDPI > window.screen.logicalXDPI ? b = window.screen.systemXDPI / window.screen.logicalXDPI : void 0 !== window.devicePixelRatio && (b = window.devicePixelRatio);
      return b;
    }, getPlaceholderAndInsertIFrame:function(b) {
      chrome.storage.local.get("keepaBoxPlaceholder keepaBoxPlaceholderBackup keepaBoxPlaceholderBackupClass keepaBoxPlaceholderAppend keepaBoxPlaceholderBackupAppend webGraphType webGraphRange".split(" "), function(a) {
        "undefined" == typeof a && (a = {});
        let d = 0;
        const f = function() {
          if (!document.getElementById("keepaButton") && !document.getElementById("amazonlive-homepage-widget")) {
            if (u) {
              const l = document.querySelector("#tabular_feature_div,#olpLinkWidget_feature_div,#tellAFriendBox_feature_div");
              try {
                document.querySelector("#keepaMobileContainer")[0].remove();
              } catch (p) {
              }
              if (l && l.previousSibling) {
                try {
                  var e = a.webGraphType;
                  try {
                    e = JSON.parse(e);
                  } catch (v) {
                  }
                  var c = a.webGraphRange;
                  try {
                    c = Number(c);
                  } catch (v) {
                  }
                  var h = Math.min(1800, 1.6 * window.innerWidth).toFixed(0), k = "https://graph.keepa.com/pricehistory.png?type=2&asin=" + g.ASIN + "&domain=" + g.domain + "&width=" + h + "&height=450";
                  k = "undefined" == typeof e ? k + "&amazon=1&new=1&used=1&salesrank=1&range=365" : k + ("&amazon=" + e[0] + "&new=" + e[1] + "&used=" + e[2] + "&salesrank=" + e[3] + "&range=" + c + "&fba=" + e[10] + "&fbm=" + e[7] + "&bb=" + e[18] + "&ld=" + e[8] + "&pe=" + e[33] + "&bbu=" + e[32] + "&wd=" + e[9]);
                  const p = document.createElement("div");
                  p.setAttribute("id", "keepaMobileContainer");
                  p.setAttribute("style", "margin-bottom: 20px;");
                  const m = document.createElement("img");
                  m.setAttribute("style", "margin: 5px 0; width: " + Math.min(1800, window.innerWidth) + "px;");
                  m.setAttribute("id", "keepaImageContainer" + g.ASIN);
                  m.setAttribute("src", k);
                  document.createElement("div").setAttribute("style", "margin: 20px; display: flex;justify-content: space-evenly;");
                  p.appendChild(m);
                  l.after(p);
                  m.addEventListener("click", function() {
                    m.remove();
                    g.insertIFrame(l.previousSibling, !1, !0);
                  }, !1);
                } catch (p) {
                  console.error(p);
                }
                return;
              }
            }
            if ((e = document.getElementById("gpdp-btf-container")) && e.previousElementSibling) {
              g.insertIFrame(e.previousElementSibling, !1, !0);
            } else {
              if ((e = document.getElementsByClassName("mocaGlamorContainer")[0]) || (e = document.getElementById("dv-sims")), e ||= document.getElementById("mas-terms-of-use"), e && e.nextSibling) {
                g.insertIFrame(e.nextSibling, !1, !0);
              } else {
                if (c = a.keepaBoxPlaceholder || "#bottomRow", e = !1, c = document.querySelector(c)) {
                  "sims_fbt" == c.previousElementSibling.id && (c = c.previousElementSibling, "bucketDivider" == c.previousElementSibling.className && (c = c.previousElementSibling), e = !0), 1 == a.keepaBoxPlaceholderAppend && (c = c.nextSibling), b(c, e);
                } else {
                  if (c = a.keepaBoxPlaceholderBackup || "#elevatorBottom", "ATFCriticalFeaturesDataContainer" == c && (c = "#ATFCriticalFeaturesDataContainer"), c = document.querySelector(c)) {
                    1 == a.keepaBoxPlaceholderBackupAppend && (c = c.nextSibling), b(c, !0);
                  } else {
                    if (c = document.getElementById("hover-zoom-end")) {
                      b(c, !0);
                    } else {
                      if (c = a.keepaBoxPlaceholderBackupClass || ".a-fixed-left-grid", (c = document.querySelector(c)) && c.nextSibling) {
                        b(c.nextSibling, !0);
                      } else {
                        e = 0;
                        c = document.getElementsByClassName("twisterMediaMatrix");
                        h = !!document.getElementById("dm_mp3Player");
                        if ((c = 0 == c.length ? document.getElementById("handleBuy") : c[0]) && 0 == e && !h && null != c.nextElementSibling) {
                          k = !1;
                          for (h = c; h;) {
                            if (h = h.parentNode, "table" === h.tagName.toLowerCase()) {
                              if ("buyboxrentTable" === h.className || /buyBox/.test(h.className) || "buyingDetailsGrid" === h.className) {
                                k = !0;
                              }
                              break;
                            } else if ("html" === h.tagName.toLowerCase()) {
                              break;
                            }
                          }
                          if (!k) {
                            c = c.nextElementSibling;
                            b(c, !1);
                            return;
                          }
                        }
                        c = document.getElementsByClassName("bucketDivider");
                        0 == c.length && (c = document.getElementsByClassName("a-divider-normal"));
                        if (!c[e]) {
                          if (!c[0]) {
                            40 > d++ && window.setTimeout(function() {
                              f();
                            }, 100);
                            return;
                          }
                          e = 0;
                        }
                        for (h = c[e]; h && c[e];) {
                          if (h = h.parentNode, "table" === h.tagName.toLowerCase()) {
                            if ("buyboxrentTable" === h.className || /buyBox/.test(h.className) || "buyingDetailsGrid" === h.className) {
                              h = c[++e];
                            } else {
                              break;
                            }
                          } else if ("html" === h.tagName.toLowerCase()) {
                            break;
                          }
                        }
                        g.placeholder = c[e];
                        c[e] && c[e].parentNode && (e = document.getElementsByClassName("lpo")[0] && c[1] && 0 == e ? c[1] : c[e], b(e, !1));
                      }
                    }
                  }
                }
              }
            }
          }
        };
        f();
      });
    }, getAFComment:function(b) {
      for (b = [b]; 0 < b.length;) {
        const a = b.pop();
        for (let d = 0; d < a.childNodes.length; d++) {
          const f = a.childNodes[d];
          if (8 === f.nodeType && -1 < f.textContent.indexOf("MarkAF")) {
            return f;
          }
          b.push(f);
        }
      }
      return null;
    }, insertIFrame:function(b, a) {
      if (null != g.iframeStorage && document.getElementById("keepaContainer")) {
        g.swapIFrame();
      } else {
        var d = document.getElementById("hover-zoom-end"), f = function(e) {
          var c = document.getElementById(e);
          const h = [];
          for (; c;) {
            h.push(c), c.id = "a-different-id", c = document.getElementById(e);
          }
          for (c = 0; c < h.length; ++c) {
            h[c].id = e;
          }
          return h;
        }("hover-zoom-end");
        chrome.storage.local.get("s_boxHorizontal", function(e) {
          "undefined" == typeof e && (e = {});
          if (null == b) {
            setTimeout(() => {
              g.getPlaceholderAndInsertIFrame(g.insertIFrame);
            }, 3000);
          } else {
            var c = e.s_boxHorizontal, h = window.innerWidth - 50;
            if (!document.getElementById("keepaContainer")) {
              e = document.createElement("div");
              "0" == c ? (h -= 550, 960 > h && (h = 960), e.setAttribute("style", "min-width: 935px; max-width:" + h + "px;display: flex;  height: 500px; border:0 none; margin: 10px 0 0;")) : e.setAttribute("style", "min-width: 935px; width: calc(100% - 30px); height: 500px; display: flex; border:0 none; margin: 10px 0 0;");
              e.setAttribute("id", "keepaContainer");
              var k = document.createElement("iframe");
              c = document.createElement("div");
              c.setAttribute("id", "keepaClear");
              k.setAttribute("style", "width: 100%; height: 100%; border:0 none;overflow: hidden;");
              k.setAttribute("src", "https://keepa.com/keepaBox.html");
              k.setAttribute("scrolling", "no");
              k.setAttribute("id", "keepa");
              Z ||= !0;
              e.appendChild(k);
              h = !1;
              if (!a) {
                null == b.parentNode || "promotions_feature_div" !== b.parentNode.id && "dp-out-of-stock-top_feature_div" !== b.parentNode.id || (b = b.parentNode);
                try {
                  var l = b.previousSibling.previousSibling;
                  null != l && "technicalSpecifications_feature_div" == l.id && (b = l);
                } catch (V) {
                }
                0 < f.length && (d = f[f.length - 1]) && "centerCol" != d.parentElement.id && ((l = g.getFirstInDOM([b, d], document.body)) && 600 < l.parentElement.offsetWidth && (b = l), b === d && (h = !0));
                (l = document.getElementById("title") || document.getElementById("title_row")) && g.getFirstInDOM([b, l], document.body) !== l && (b = l);
              }
              l = document.getElementById("vellumMsg");
              null != l && (b = l);
              l = document.body;
              var p = document.documentElement;
              p = Math.max(l.scrollHeight, l.offsetHeight, p.clientHeight, p.scrollHeight, p.offsetHeight);
              var m = b.offsetTop / p;
              if (0.5 < m || 0 > m) {
                l = g.getAFComment(l), null != l && (m = b.offsetTop / p, 0.5 > m && (b = l));
              }
              if (b.parentNode) {
                l = document.querySelector(".container_vertical_middle");
                "burjPageDivider" == b.id ? (b.parentNode.insertBefore(e, b), a || b.parentNode.insertBefore(c, e.nextSibling)) : "bottomRow" == b.id ? (b.parentNode.insertBefore(e, b), a || b.parentNode.insertBefore(c, e.nextSibling)) : h ? (b.parentNode.insertBefore(e, b.nextSibling), a || b.parentNode.insertBefore(c, e.nextSibling)) : null != l ? (b = l, b.parentNode.insertBefore(e, b.nextSibling), a || b.parentNode.insertBefore(c, e.nextSibling)) : (b.parentNode.insertBefore(e, b), a || b.parentNode.insertBefore(c, 
                e));
                g.iframeStorage = k;
                e.style.display = g.cssFlex;
                var v = !1, z = 5;
                if (!u) {
                  var E = setInterval(function() {
                    if (0 >= z--) {
                      clearInterval(E);
                    } else {
                      var V = null != document.getElementById("keepa");
                      try {
                        if (!V) {
                          throw g.getPlaceholderAndInsertIFrame(g.insertIFrame), 1;
                        }
                        if (v) {
                          throw 1;
                        }
                        document.getElementById("keepa").contentDocument.location = iframeUrl;
                      } catch (aa) {
                        clearInterval(E);
                      }
                    }
                  }, 4000), J = function() {
                    v = !0;
                    k.removeEventListener("load", J, !1);
                    g.synchronizeIFrame();
                  };
                  k.addEventListener("load", J, !1);
                }
              } else {
                g.swapIFrame();
              }
            }
          }
        });
      }
    }, handleIFrameMessage:function(b, a, d) {
      switch(b) {
        case "resize":
          X ||= !0;
          a = "" + a;
          -1 == a.indexOf("px") && (a += "px");
          if (b = document.getElementById("keepaContainer")) {
            b.style.height = a;
          }
          break;
        case "ping":
          d({location:chrome.runtime.id + " " + document.location});
          break;
        case "openPage":
          chrome.runtime?.id && chrome.runtime.sendMessage({type:"openPage", url:a});
          break;
        case "getToken":
          let f = {d:g.domain, a:g.ASIN, eType:K, eVersion:r, url:document.location.href};
          chrome.runtime?.id ? g.sendMessageWithRetry({type:"getCookie", key:"token"}, 3, 1000, e => {
            f.token = e?.value;
            f.install = e?.install;
            d(f);
          }, e => {
            console.log("failed token retrieval: ", e);
            d(f);
          }) : d(f);
          break;
        case "setCookie":
          chrome.runtime?.id && chrome.runtime.sendMessage({type:"setCookie", key:a.key, val:a.val});
      }
    }, sendMessageWithRetry:function(b, a, d, f, e) {
      let c = 0, h = !1;
      const k = () => {
        c += 1;
        chrome.runtime.sendMessage(b, l => {
          h || (h = !0, f(l));
        });
        setTimeout(() => {
          h || (c < a ? setTimeout(k, d) : (console.log("Failed to receive a response after maximum retries."), e()));
        }, d);
      };
      k();
    }, synchronizeIFrame:function() {
      let b = 0;
      chrome.storage.local.get("s_boxHorizontal", function(f) {
        "undefined" != typeof f && "undefined" != typeof f.s_boxHorizontal && (b = f.s_boxHorizontal);
      });
      let a = window.innerWidth, d = !1;
      u || window.addEventListener("resize", function() {
        d || (d = !0, window.setTimeout(function() {
          if (a != window.innerWidth && "0" == b) {
            a = window.innerWidth;
            let f = window.innerWidth - 50;
            f -= 550;
            935 > f && (f = 935);
            document.getElementById("keepaContainer").style.width = f;
          }
          d = !1;
        }, 100));
      }, !1);
    }, getFirstInDOM:function(b, a) {
      let d;
      for (a = a.firstChild; a; a = a.nextSibling) {
        if ("IFRAME" !== a.nodeName && 1 === a.nodeType) {
          if (-1 !== b.indexOf(a)) {
            return a;
          }
          if (d = g.getFirstInDOM(b, a)) {
            return d;
          }
        }
      }
      return null;
    }, getClipRect:function(b) {
      "string" === typeof b && (b = document.querySelector(b));
      let a = 0, d = 0;
      const f = function(e) {
        a += e.offsetLeft;
        d += e.offsetTop;
        e.offsetParent && f(e.offsetParent);
      };
      f(b);
      return 0 == d && 0 == a ? g.getClipRect(b.parentNode) : {top:d, left:a, width:b.offsetWidth, height:b.offsetHeight};
    }, findPlaceholderBelowImages:function(b) {
      const a = b;
      let d, f = 100;
      do {
        for (f--, d = null; !d;) {
          d = b.nextElementSibling, d || (d = b.parentNode.nextElementSibling), b = d ? d : b.parentNode.parentNode, !d || "IFRAME" !== d.nodeName && "SCRIPT" !== d.nodeName && 1 === d.nodeType || (d = null);
        }
      } while (0 < f && 100 < g.getClipRect(d).left);
      return d ? d : a;
    }, httpGet:function(b, a) {
      const d = new XMLHttpRequest();
      a && (d.onreadystatechange = function() {
        4 == d.readyState && a.call(this, d.responseText);
      });
      d.open("GET", b, !0);
      d.send();
    }, httpPost2:function(b, a, d, f, e) {
      const c = new XMLHttpRequest();
      f && (c.onreadystatechange = function() {
        4 == c.readyState && f.call(this, c.responseText);
      });
      c.withCredentials = e;
      c.open("POST", b, !0);
      c.setRequestHeader("Content-Type", d);
      c.send(a);
    }, httpPost:function(b, a, d, f) {
      g.httpPost2(b, a, "text/plain;charset=UTF-8", d, f);
    }, lastBugReport:0, reportBug:function(b, a, d) {
      var f = Date.now();
      if (!(6E5 > f - g.lastBugReport || /(dead object)|(Script error)|(\.location is null)/i.test(b))) {
        g.lastBugReport = f;
        f = "";
        try {
          f = Error().stack.split("\n").splice(1).splice(1).join("&ensp;&lArr;&ensp;");
          if (!/(keepa|content)\.js/.test(f)) {
            return;
          }
          f = f.replace(RegExp("chrome-extension://.*?/content/", "g"), "").replace(/:[0-9]*?\)/g, ")").replace(/[ ]{2,}/g, "");
        } catch (e) {
        }
        if ("object" == typeof b) {
          try {
            b = b instanceof Error ? b.toString() : JSON.stringify(b);
          } catch (e) {
          }
        }
        null == d && (d = {exception:b, additional:a, url:document.location.host, stack:f});
        null != d.url && d.url.startsWith("blob:") || (d.keepaType = N ? "keepaChrome" : F ? "keepaOpera" : P ? "keepaSafari" : A ? "keepaEdge" : "keepaFirefox", d.version = r, chrome.storage.local.get("token", function(e) {
          "undefined" == typeof e && (e = {token:"undefined"});
          g.httpPost("https://dyn.keepa.com/service/bugreport/?user=" + e.token + "&type=" + K, JSON.stringify(d));
        }));
      }
    }};
    window.onerror = function(b, a, d, f, e) {
      let c;
      "string" !== typeof b && (e = b.error, c = b.filename || b.fileName, d = b.lineno || b.lineNumber, f = b.colno || b.columnNumber, b = b.message || b.name || e.message || e.name);
      b = b.toString();
      let h = "";
      f = f || 0;
      if (e && e.stack) {
        h = e.stack;
        try {
          h = e.stack.split("\n").splice(1).splice(1).join("&ensp;&lArr;&ensp;");
          if (!/(keepa|content)\.js/.test(h)) {
            return;
          }
          h = h.replace(RegExp("chrome-extension://.*?/content/", "g"), "").replace(/:[0-9]*?\)/g, ")").replace(/[ ]{2,}/g, "");
        } catch (k) {
        }
      }
      "undefined" === typeof d && (d = 0);
      "undefined" === typeof f && (f = 0);
      b = {msg:b, url:(a || c || document.location.toString()) + ":" + d + ":" + f, stack:h};
      "ipbakfmnjdenbmoenhicfmoojdojjjem" != chrome.runtime.id && "blfpbjkajgamcehdbehfdioapoiibdmc" != chrome.runtime.id || console.log(b);
      g.reportBug(null, null, b);
      return !1;
    };
    if (window.self == window.top && (document.addEventListener("DOMContentLoaded", function(b) {
      chrome.runtime.sendMessage({type:"optionalPermissionsRequired"}, function(a) {
        if (!0 === a.value) {
          let d = 0;
          const f = () => {
            0 < d || (d++, chrome.runtime.sendMessage({type:"optionalPermissions"}, function(e) {
            }), document.body.removeEventListener("contextmenu", f), document.body.removeEventListener("dblclick", f), document.body.removeEventListener("click", f));
          };
          document.body.addEventListener("contextmenu", f, {once:!0});
          document.body.addEventListener("dblclick", f, {once:!0});
          document.body.addEventListener("click", f, {once:!0});
        }
      });
    }), !(/.*music\.amazon\..*/.test(document.location.href) || /.*primenow\.amazon\..*/.test(document.location.href) || /.*amazonlive-portal\.amazon\..*/.test(document.location.href) || /.*amazon\.com\/restaurants.*/.test(document.location.href)))) {
      x = function(b) {
        chrome.runtime.sendMessage({type:"sendData", val:{key:"m1", payload:[b]}}, function() {
        });
      };
      var I = document.location.href, Y = !1;
      document.addEventListener("DOMContentLoaded", function(b) {
        if (!Y) {
          try {
            if (I.startsWith("https://test.keepa.com") || I.startsWith("https://keepa.com")) {
              let a = document.createElement("div");
              a.id = "extension";
              a.setAttribute("type", K);
              a.setAttribute("version", r);
              document.body.appendChild(a);
              Y = !0;
            }
          } catch (a) {
          }
        }
      });
      var T = !1;
      chrome.runtime.sendMessage({type:"isActive"});
      if (!/((\/images)|(\/review)|(\/customer-reviews)|(ask\/questions)|(\/product-reviews))/.test(I) && !/\/e\/([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/.test(I) && (I.match(/^https:\/\/.*?\.amazon\.(de|com|co\.uk|co\.jp|ca|fr|it|es|nl|in|com\.mx|com\.br|com\.au)\/[^.]*?(\/|[?&]ASIN=)([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/) || I.match(/^https:\/\/.*?\.amazon\.(de|com|co\.uk|co\.jp|ca|fr|it|es|nl|in|com\.mx|com\.br|com\.au)\/(.*?)\/dp\/([BC][A-Z0-9]{9}|\d{9}(!?X|\d))\//) || I.match(/^https:\/\/.*?\.amzn\.(com).*?\/([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/))) {
        g.onPageLoad(!1), T = !0;
      } else if (!I.match(/^https:\/\/.*?\.amazon\.(de|com|co\.uk|co\.jp|ca|fr|it|nl|es|in|com\.mx|com\.br|com\.au)\/[^.]*?\/(wishlist|registry)/) && !I.match(/^htt(p|ps):\/\/w*?\.amzn\.(com)[^.]*?\/(wishlist|registry)/)) {
        if (I.match("^https://.*?(?:seller).*?.amazon.(de|com|co.uk|co.jp|ca|fr|it|nl|es|in|com.mx|com.br|com.au)/")) {
          x("s" + g.getDomain(RegExp.$1));
          let b = !1;
          function a() {
            b || (b = !0, chrome.runtime.sendMessage({type:"isSellerActive"}), setTimeout(() => {
              b = !1;
            }, 1000));
          }
          a();
          document.addEventListener("mousemove", a);
          document.addEventListener("keydown", a);
          document.addEventListener("touchstart", a);
        } else {
          I.match(/^https:\/\/.*?(?:af.?ilia|part|assoc).*?\.amazon\.(de|com|co\.uk|co\.jp|nl|ca|fr|it|es|in|com\.mx|com\.br|com\.au)\/home/) && x("a" + g.getDomain(RegExp.$1));
        }
      }
      if (!u) {
        x = /^https:\/\/.*?\.amazon\.(de|com|co\.uk|co\.jp|ca|fr|it|es|nl|in|com\.mx|com\.br|com\.au)\/(s([\/?])|gp\/bestsellers\/|gp\/search\/|.*?\/b\/)/;
        (T || I.match(x)) && document.addEventListener("DOMContentLoaded", function(b) {
          let a = null;
          chrome.runtime.sendMessage({type:"getFilters"}, function(d) {
            a = d;
            if (null != a && null != a.value) {
              let f = function() {
                let l = I.match("^https?://.*?.amazon.(de|com|co.uk|co.jp|ca|fr|it|es|in|com.br|nl|com.mx)/");
                if (T || l) {
                  let p = g.getDomain(RegExp.$1);
                  scanner.scan(d.value, function(m) {
                    m.key = "f1";
                    m.domainId = p;
                    chrome.runtime.sendMessage({type:"sendData", val:m}, function(v) {
                    });
                  });
                }
              };
              f();
              let e = document.location.href, c = -1, h = -1, k = -1;
              h = setInterval(function() {
                e != document.location.href && (e = document.location.href, clearTimeout(k), k = setTimeout(function() {
                  f();
                }, 2000), clearTimeout(c), c = setTimeout(function() {
                  clearInterval(h);
                }, 180000));
              }, 2000);
              c = setTimeout(function() {
                clearInterval(h);
              }, 180000);
            }
          });
        });
        x = document.location.href;
        x.match("^https://.*?.amazon.(de|com|co.uk|co.jp|ca|fr|it|es|in|nl|com.mx|com.br|com.au)/") && -1 == x.indexOf("aws.amazon.") && -1 == x.indexOf("music.amazon.") && -1 == x.indexOf("services.amazon.") && -1 == x.indexOf("primenow.amazon.") && -1 == x.indexOf("kindle.amazon.") && -1 == x.indexOf("watch.amazon.") && -1 == x.indexOf("developer.amazon.") && -1 == x.indexOf("skills-store.amazon.") && -1 == x.indexOf("pay.amazon.") && document.addEventListener("DOMContentLoaded", function(b) {
          setTimeout(function() {
            chrome.runtime.onMessage.addListener(function(a, d, f) {
              switch(a.key) {
                case "collectASINs":
                  a = {};
                  var e = !1;
                  d = (document.querySelector("#main") || document.querySelector("#zg") || document.querySelector("#pageContent") || document.querySelector("#wishlist-page") || document.querySelector("#merchandised-content") || document.querySelector("#reactApp") || document.querySelector("[id^='contentGrid']") || document.querySelector("#container") || document.querySelector(".a-container") || document).getElementsByTagName("a");
                  if (void 0 != d && null != d) {
                    for (let h = 0; h < d.length; h++) {
                      var c = d[h].href;
                      /\/images/.test(c) || /\/e\/([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/.test(c) || !c.match(/^https?:\/\/.*?\.amazon\.(de|com|co\.uk|co\.jp|ca|fr|it|es|nl|in|com\.mx|com\.br|com\.au)\/[^.]*?(?:\/|\?ASIN=)([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/) && !c.match(/^https?:\/\/.*?\.amzn\.(com)[^.]*?\/([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/) || (e = RegExp.$2, c = g.getDomain(RegExp.$1), "undefined" === typeof a[c] && (a[c] = []), a[c].includes(e) || a[c].push(e), e = !0);
                    }
                  }
                  if (e) {
                    f(a);
                  } else {
                    return alert("Keepa: No product ASINs found on this page."), !1;
                  }
                  break;
                default:
                  f({});
              }
            });
            chrome.storage.local.get(["overlayPriceGraph", "webGraphType", "webGraphRange"], function(a) {
              "undefined" == typeof a && (a = {});
              try {
                let d = a.overlayPriceGraph, f = a.webGraphType;
                try {
                  f = JSON.parse(f);
                } catch (h) {
                }
                let e = a.webGraphRange;
                try {
                  e = Number(e);
                } catch (h) {
                }
                let c;
                if (1 == d) {
                  let h = document.getElementsByTagName("a");
                  if (void 0 != h && null != h) {
                    for (c = 0; c < h.length; c++) {
                      let p = h[c].href;
                      /\/images/.test(p) || /\/e\/([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/.test(p) || !p.match(/^https?:\/\/.*?\.amazon\.(de|com|co\.uk|co\.jp|ca|fr|it|es|in|com\.mx)\/[^.]*?(?:\/|\?ASIN=)([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/) && !p.match(/^https?:\/\/.*?\.amzn\.(com)[^.]*?\/([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/) || -1 == p.indexOf("offer-listing") && D.add_events(f, e, h[c], p, RegExp.$1, RegExp.$2);
                    }
                  }
                  let k = function(p) {
                    if ("A" == p.nodeName) {
                      var m = p.href;
                      /\/images/.test(m) || /\/e\/([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/.test(m) || !m.match(/^https?:\/\/.*?\.amazon\.(de|com|co\.uk|co\.jp|ca|fr|it|es|in|com\.mx)\/[^.]*?(?:\/|\?ASIN=)([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/) && !m.match(/^https?:\/\/.*?\.amzn\.(com)[^.]*?\/([BC][A-Z0-9]{9}|\d{9}(!?X|\d))/) || -1 == m.indexOf("offer-listing") && D.add_events(f, e, p, m, RegExp.$1, RegExp.$2);
                    }
                  }, l = new MutationObserver(function(p) {
                    p.forEach(function(m) {
                      try {
                        if ("childList" === m.type) {
                          for (c = 0; c < m.addedNodes.length; c++) {
                            k(m.addedNodes[c]);
                            for (var v = m.addedNodes[c].children; null != v && "undefined" != v && 0 < v.length;) {
                              var z = [];
                              for (let E = 0; E < v.length; E++) {
                                k(v[E]);
                                try {
                                  if (v[E].children && 0 < v[E].children.length) {
                                    for (let J = 0; J < v[E].children.length && 30 > J; J++) {
                                      z.push(v[E].children[J]);
                                    }
                                  }
                                } catch (J) {
                                }
                              }
                              v = z;
                            }
                          }
                        } else {
                          if (z = m.target.getElementsByTagName("a"), "undefined" != z && null != z) {
                            for (v = 0; v < z.length; v++) {
                              k(z[v]);
                            }
                          }
                        }
                        k(m.target);
                      } catch (E) {
                      }
                    });
                  });
                  l.observe(document.querySelector("html"), {childList:!0, attributes:!1, characterData:!1, subtree:!0, attributeOldValue:!1, characterDataOldValue:!1});
                  window.onunload = function m() {
                    try {
                      window.detachEvent("onunload", m), l.disconnect();
                    } catch (v) {
                    }
                  };
                  document.addEventListener("scroll", m => {
                    D.clear_image(m);
                  });
                }
              } catch (d) {
              }
            });
          }, 100);
        });
        var D = {image_urls_main:[], pf_preview_current:"", preview_images:[], tld:"", createNewImageElement:function(b, a, d) {
          b = b.createElement("img");
          b.style.borderTop = "2px solid #ff9f29";
          b.style.borderBottom = "3px solid grey";
          b.style.display = "block";
          b.style.position = "relative";
          b.style.padding = "5px";
          b.style.width = a + "px";
          b.style.height = d + "px";
          b.style.maxWidth = a + "px";
          b.style.maxHeight = d + "px";
          return b;
        }, preview_image:function(b, a, d, f, e, c) {
          let h;
          try {
            h = d.originalTarget.ownerDocument;
          } catch (m) {
            h = document;
          }
          if (!h.getElementById("pf_preview")) {
            var k = h.createElement("div");
            k.id = "pf_preview";
            k.addEventListener("mouseout", function(m) {
              D.clear_image(m);
            }, !1);
            k.style.boxShadow = "rgb(68, 68, 68) 0px 1px 7px -2px";
            k.style.position = "fixed";
            k.style.zIndex = "10000000";
            k.style.bottom = "0px";
            k.style.right = "0px";
            k.style.margin = "12px 12px";
            k.style.backgroundColor = "#fff";
            h.body.appendChild(k);
          }
          D.pf_preview_current = h.getElementById("pf_preview");
          if (!D.pf_preview_current.firstChild) {
            var l = Math.max(Math.floor(0.3 * h.defaultView.innerHeight), 128), p = Math.max(Math.floor(0.3 * h.defaultView.innerWidth), 128);
            k = 2;
            if (300 > p || 150 > l) {
              k = 1;
            }
            1000 < p && (p = 1000);
            1000 < l && (l = 1000);
            D.pf_preview_current.current = -1;
            D.pf_preview_current.a = e;
            D.pf_preview_current.href = f;
            D.pf_preview_current.size = Math.floor(1.1 * Math.min(p, l));
            h.defaultView.innerWidth - d.clientX < 1.05 * p && h.defaultView.innerHeight - d.clientY < 1.05 * l && (d = h.getElementById("pf_preview"), d.style.right = "", d.style.left = "6px");
            e = "https://graph.keepa.com/pricehistory.png?type=" + k + "&asin=" + e + "&domain=" + c + "&width=" + p + "&height=" + l;
            e = "undefined" == typeof b ? e + "&amazon=1&new=1&used=1&salesrank=1&range=365" : e + ("&amazon=" + b[0] + "&new=" + b[1] + "&used=" + b[2] + "&salesrank=" + b[3] + "&range=" + a + "&fba=" + b[10] + "&fbm=" + b[7] + "&bb=" + b[18] + "&ld=" + b[8] + "&pe=" + b[33] + "&bbu=" + b[32] + "&wd=" + b[9]);
            h.getElementById("pf_preview").style.display = "block";
            fetch(e).then(m => {
              try {
                if ("FAIL" === m.headers.get("screenshot-status")) {
                  return null;
                }
              } catch (v) {
              }
              return m.blob();
            }).then(m => {
              if (null != m) {
                if (D.pf_preview_current.firstChild) {
                  D.pf_preview_current.firstChild.setAttribute("src", URL.createObjectURL(m));
                } else {
                  let v = D.createNewImageElement(h, p, l);
                  D.pf_preview_current.appendChild(v);
                  v.setAttribute("src", URL.createObjectURL(m));
                }
              }
            });
          }
        }, clear_image:function(b) {
          let a;
          try {
            let d;
            try {
              d = b.originalTarget.ownerDocument;
            } catch (f) {
              d = document;
            }
            a = d.getElementById("pf_preview");
            a.style.display = "none";
            a.style.right = "2px";
            a.style.left = "";
            D.pf_preview_current.innerHTML = "";
          } catch (d) {
          }
        }, add_events:function(b, a, d, f, e, c) {
          0 <= f.indexOf("#") || 0 < f.indexOf("plattr=") || (D.tld = e, "pf_prevImg" != d.getAttribute("keepaPreview") && (d.addEventListener("mouseover", function(h) {
            D.preview_image(b, a, h, f, c, e);
            d.addEventListener("mouseout", function(k) {
              D.clear_image(k);
            }, {once:!0});
            return !0;
          }, !0), d.setAttribute("keepaPreview", "pf_prevImg")));
        }};
      }
    }
  }
})();

