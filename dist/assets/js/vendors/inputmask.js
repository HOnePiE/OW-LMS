!(function () {
  var e,
    n,
    t,
    a,
    m,
    d,
    s = document.getElementById("phone-mask"),
    s =
      (s &&
        ((d = IMask(s, { mask: "+{7}(000)000-00-00" })).on(
          "accept",
          function () {
            11 <= d.unmaskedValue.length &&
              ((document.getElementById("phone-complete").style.display = ""),
              (document.getElementById("phone-unmasked").innerHTML =
                d.unmaskedValue));
          }
        ),
        d.on("complete", function () {
          document.getElementById("phone-complete").style.display =
            "inline-block";
        })),
      document.getElementById("ssn-mask")),
    s =
      (s &&
        ((e = IMask(s, {
          mask: "XXX-XX-0000",
          definitions: {
            X: { mask: "0", displayChar: "X", placeholderChar: "#" },
          },
          lazy: !1,
          overwrite: "shift",
        })).on("accept", function () {
          11 === e.value.length &&
            ((document.getElementById("ssn-complete").style.display = ""),
            (document.getElementById("ssn-value").innerHTML = e.value));
        }),
        e.on("complete", function () {
          document.getElementById("ssn-complete").style.display =
            "inline-block";
        })),
      document.getElementById("regexp-mask")),
    s =
      (s && IMask(s, { mask: /^[1-6]\d{0,5}$/ }),
      document.getElementById("number-mask")),
    s =
      (s &&
        (n = IMask(s, {
          mask: Number,
          min: -1e4,
          max: 1e4,
          thousandsSeparator: " ",
        })).on("accept", function () {
          document.getElementById("number-value").innerHTML = n.masked.number;
        }),
      document.getElementById("date-mask")),
    s =
      (s &&
        (t = IMask(s, {
          mask: Date,
          min: new Date(1990, 0, 1),
          max: new Date(2020, 0, 1),
          lazy: !1,
        })).on("accept", function () {
          document.getElementById("date-value").innerHTML =
            t.masked.date || "-";
        }),
      document.getElementById("dynamic-mask")),
    s =
      (s &&
        (a = IMask(s, {
          mask: [{ mask: "+{7}(000)000-00-00" }, { mask: /^\S*@?\S*$/ }],
        })).on("accept", function () {
          0 < a.masked.unmaskedValue.length &&
            (document.getElementById("dynamic-value").innerHTML =
              a.masked.unmaskedValue || "-");
        }),
      document.getElementById("currency-mask")),
    s =
      (s &&
        (m = IMask(s, {
          mask: "$num",
          blocks: { num: { mask: Number, thousandsSeparator: " " } },
        })).on("accept", function () {
          document.getElementById("currency-value").innerHTML =
            m.masked.unmaskedValue || "-";
        }),
      document.getElementById("pipe-mask")),
    s =
      (s &&
        ((d = IMask.createPipe(
          d.masked,
          IMask.PIPE_TYPE.UNMASKED,
          IMask.PIPE_TYPE.MASKED
        )),
        s.addEventListener("input", function (e) {
          e = e.target.value;
          document.getElementById("pipe-value").innerHTML = d(e) || "-";
        })),
      document.getElementById("card-mask")),
    s =
      (s && new IMask(s, { mask: "0000-0000-0000-0000" }),
      document.getElementById("digit-mask"));
  s && new IMask(s, { mask: "000" });
})();
