var PubishSaveProduct;
PubishSaveProduct || (PubishSaveProduct = {});
PubishSaveProduct = {
    SaveRecord: function(a) {
        var c = $("#txtProductName").val() || null,
        d = $("#selCrops").val(),
        l = $("#txtCropVariety").val(),
        t = $("#selQuarter").val(),
        n = $("#SelectedOrg").val(),
        p = $("#txtProductManager").val(),
        u = $("#txtContent").val(),
        q = PublishArchives.ProductIntroEditor.getContent();
        if (4E3 <= q.length) ZENG.msgbox.show("\u8bf7\u8f93\u51652500\u5b57\u4ee5\u5185\u7684\u4ea7\u54c1\u7b80\u4ecb", 4, 2E3),
        $("#ProductIntro").focus();
        else {
            var r = PublishArchives.CompanyIntroEditor.getContent();
            if (4E3 <= r.length) ZENG.msgbox.show("\u8bf7\u8f93\u51652500\u5b57\u4ee5\u5185\u7684\u516c\u53f8\u7b80\u4ecb", 4, 2E3),
            $("#CompanyIntro").focus();
            else {
                var s = "",
                s = $(".ImgCutAttachment").data("LogoIcon");
                if (c) if (p) if ( - 1 == n) ZENG.msgbox.show("\u8bf7\u9009\u62e9\u79cd\u690d\u56ed\u533a", 4, 2E3),
                $("#SelectedOrg").focus();
                else if ( - 1 == d) ZENG.msgbox.show("\u8bf7\u9009\u62e9\u4f5c\u7269", 4, 2E3),
                $("#selCrops").focus();
                else if ( - 1 == l) ZENG.msgbox.show("\u8bf7\u9009\u62e9\u54c1\u79cd", 4, 2E3),
                $("#txtCropVariety").focus();
                else {
                    PubishSaveProduct.GrowImgTime = PubishSaveProduct.getInputTextValue("GrowImgTime").split("|");
                    PubishSaveProduct.GrowAddr = PubishSaveProduct.getInputTextValue("GrowAddr").split("|");
                    PubishSaveProduct.Growintro = PubishSaveProduct.getInputTextValue("Growintro").split("|");
                    for (var m = "",
                    h = 0; h < $("#GrowImgDiv")[0].children.length; h++) for (var b = $("#GrowImgDiv img:eq(" + h + ")"), e = 0; e < b.length; e++) var k = b[e].src.replace(PubishSaveProduct.getRootPath(), ""),
                    m = -1 != k.indexOf("base64") ? m + (b[e].src + "|") : m + (k.replace("_550x500", "") + ":" + k + "|");
                    0 < m.length && (m = m.substring(0, m.length - 1));
                    PubishSaveProduct.ManureDateTime = PubishSaveProduct.getInputTextValue("ManureDateTime").split("|");
                    PubishSaveProduct.ManureTypetxt = PubishSaveProduct.getInputTextValue("ManureTypetxt").split("|");
                    PubishSaveProduct.ManureName = PubishSaveProduct.getInputTextValue("ManureName").split("|");
                    PubishSaveProduct.ManureDosage = PubishSaveProduct.getInputTextValue("ManureDosage").split("|");
                    PubishSaveProduct.ManureBrand = PubishSaveProduct.getInputTextValue("ManureBrand").split("|");
                    PubishSaveProduct.ManureCompany = PubishSaveProduct.getInputTextValue("ManureCompany").split("|");
                    PubishSaveProduct.PesticideDateTime = PubishSaveProduct.getInputTextValue("PesticideDateTime").split("|");
                    PubishSaveProduct.PesticideName = PubishSaveProduct.getInputTextValue("PesticideName").split("|");
                    PubishSaveProduct.PesticideDosage = PubishSaveProduct.getInputTextValue("PesticideDosage").split("|");
                    PubishSaveProduct.PesticideBrand = PubishSaveProduct.getInputTextValue("PesticideBrand").split("|");
                    PubishSaveProduct.PesticideCompany = PubishSaveProduct.getInputTextValue("PesticideCompany").split("|");
                    PubishSaveProduct.CertifiedSeleted = PubishSaveProduct.getInputTextValue("CertifiedSeleted").split("|");
                    PubishSaveProduct.CertifiedDate = PubishSaveProduct.getInputTextValue("CertifiedDate").split("|");
                    PubishSaveProduct.CertifiedNo = PubishSaveProduct.getInputTextValue("CertifiedNo").split("|");
                    PubishSaveProduct.CertifiedValidDate = PubishSaveProduct.getInputTextValue("CertifiedValidDate").split("|");
                    PubishSaveProduct.CertifiedOrg = PubishSaveProduct.getInputTextValue("CertifiedOrg").split("|");
                    PubishSaveProduct.DetectionSeleted = PubishSaveProduct.getInputTextValue("DetectionSeleted").split("|");
                    PubishSaveProduct.DetectionDate = PubishSaveProduct.getInputTextValue("DetectionDate").split("|");
                    PubishSaveProduct.DetectionUser = PubishSaveProduct.getInputTextValue("DetectionUser").split("|");
                    PubishSaveProduct.DetectionValue = PubishSaveProduct.getInputTextValue("DetectionValue").split("|");
                    PubishSaveProduct.IternetShoplink = PubishSaveProduct.getInputTextValue("IternetShoplink").split("|");
                    PubishSaveProduct.ShopAddr = PubishSaveProduct.getInputTextValue("ShopAddr").split("|");
                    PubishSaveProduct.SalerName = PubishSaveProduct.getInputTextValue("SalerName").split("|");
                    PubishSaveProduct.SalerPhone = PubishSaveProduct.getInputTextValue("SalerPhone").split("|");
                    for (var f = "",
                    h = 0; h < $("#CertificateDiv")[0].children.length; h++) {
                        b = $("#CertificateDiv div:eq(" + h + ")")[0].id.toString();
                        b = b.split("_")[1].toString();
                        b = $(".ImgContainer" + b).find("img");
                        if (0 < b.length) for (e = 0; e < b.length; e++) k = b[e].src.replace(PubishSaveProduct.getRootPath(), ""),
                        f = -1 != k.indexOf("base64") ? f + (b[e].src + "|") : f + (k.replace("_550x500", "") + ":" + k + "|");
                        else f += "none|";
                        f = f.substring(0, f.length - 1);
                        f += "#"
                    }
                    for (var f = f.substring(0, f.length - 1), g = "", h = 0; h < $("#DetectionDiv")[0].children.length; h++) {
                        b = $("#DetectionDiv div:eq(" + h + ")")[0].id.toString();
                        b = b.split("_")[1].toString();
                        b = $(".ImgDeContainer" + b).find("img");
                        if (0 < b.length) for (e = 0; e < b.length; e++) k = b[e].src.replace(PubishSaveProduct.getRootPath(), ""),
                        g = -1 != k.indexOf("base64") ? g + (b[e].src + "|") : g + (k.replace("_550x500", "") + ":" + k + "|");
                        else g += "none|";
                        g = g.substring(0, g.length - 1) + "#"
                    }
                    g = g.substring(0, g.length - 1);
                    c = {
                        UserID: TransferloadUser.TraceabilityInfo.UserID,
                        txtProductName: c,
                        txtManager: p,
                        selCrops: d,
                        txtCropVariety: l,
                        selQuarter: t,
                        OrgID: n,
                        txtContent: u,
                        ProductIntro: q,
                        CompanyIntro: r,
                        ProductLogoImg: s,
                        GrowImgTime: null == PubishSaveProduct.GrowImgTime ? "": "" + PubishSaveProduct.GrowImgTime[0] + "",
                        GrowAddr: null == PubishSaveProduct.GrowAddr ? "": "" + PubishSaveProduct.GrowAddr[0] + "",
                        Growintro: null == PubishSaveProduct.Growintro ? "": "" + PubishSaveProduct.Growintro[0] + "",
                        GrowImg: m,
                        ManureDateTime: null == PubishSaveProduct.ManureDateTime ? "": "" + PubishSaveProduct.ManureDateTime[0] + "",
                        ManureTypetxt: null == PubishSaveProduct.ManureTypetxt ? "": "" + PubishSaveProduct.ManureTypetxt[0] + "",
                        ManureName: null == PubishSaveProduct.ManureName ? "": "" + PubishSaveProduct.ManureName[0] + "",
                        ManureDosage: null == PubishSaveProduct.ManureDosage ? "": "" + PubishSaveProduct.ManureDosage[0] + "",
                        ManureBrand: null == PubishSaveProduct.ManureBrand ? "": "" + PubishSaveProduct.ManureBrand[0] + "",
                        ManureCompany: null == PubishSaveProduct.ManureCompany ? "": "" + PubishSaveProduct.ManureCompany[0] + "",
                        PesticideDateTime: null == PubishSaveProduct.PesticideDateTime ? "": "" + PubishSaveProduct.PesticideDateTime[0] + "",
                        PesticideName: null == PubishSaveProduct.PesticideName ? "": "" + PubishSaveProduct.PesticideName[0] + "",
                        PesticideDosage: null == PubishSaveProduct.PesticideDosage ? "": "" + PubishSaveProduct.PesticideDosage[0] + "",
                        PesticideBrand: null == PubishSaveProduct.PesticideBrand ? "": "" + PubishSaveProduct.PesticideBrand[0] + "",
                        PesticideCompany: null == PubishSaveProduct.PesticideCompany ? "": "" + PubishSaveProduct.PesticideCompany[0] + "",
                        CertifiedSeleted: null == PubishSaveProduct.CertifiedSeleted ? "": "" + PubishSaveProduct.CertifiedSeleted[0] + "",
                        CertifiedDate: null == PubishSaveProduct.CertifiedDate ? "": "" + PubishSaveProduct.CertifiedDate[0] + "",
                        CertifiedNo: null == PubishSaveProduct.CertifiedNo ? "": "" + PubishSaveProduct.CertifiedNo[0] + "",
                        CertifiedValidDate: null == PubishSaveProduct.CertifiedValidDate ? "": "" + PubishSaveProduct.CertifiedValidDate[0] + "",
                        CertifiedOrg: null == PubishSaveProduct.CertifiedOrg ? "": "" + PubishSaveProduct.CertifiedOrg[0] + "",
                        Certificateimg: f,
                        DetectionSeleted: null == PubishSaveProduct.DetectionSeleted ? "": "" + PubishSaveProduct.DetectionSeleted[0] + "",
                        DetectionDate: null == PubishSaveProduct.DetectionDate ? "": "" + PubishSaveProduct.DetectionDate[0] + "",
                        DetectionUser: null == PubishSaveProduct.DetectionUser ? "": "" + PubishSaveProduct.DetectionUser[0] + "",
                        DetectionValue: null == PubishSaveProduct.DetectionValue ? "": "" + PubishSaveProduct.DetectionValue[0] + "",
                        DetectionImg: g,
                        IternetShoplink: null == PubishSaveProduct.IternetShoplink ? "": "" + PubishSaveProduct.IternetShoplink[0] + "",
                        ShopAddr: null == PubishSaveProduct.ShopAddr ? "": "" + PubishSaveProduct.ShopAddr[0] + "",
                        SalerName: null == PubishSaveProduct.SalerName ? "": "" + PubishSaveProduct.SalerName[0] + "",
                        SalerPhone: null == PubishSaveProduct.SalerPhone ? "": "" + PubishSaveProduct.SalerPhone[0] + ""
                    };
                    c.ProductID = a ? a.ProductID: 0;
                    Service.post({
                        url: "/TraceabilityService.svc/SaveProductRecord",
                        params: c,
                        success: function(a) {
                            PubishSaveProduct.SaveProductMoudle(a.ProductID)
                        },
                        mask: function() {
                            $("body").mask("\u6b63\u5728\u63d0\u4ea4\u6570\u636e,\u8bf7\u7a0d\u5019...")
                        },
                        unmask: function() {
                            $("body").unmask()
                        }
                    })
                } else ZENG.msgbox.show("\u8bf7\u8f93\u5165\u8d1f\u8d23\u4eba", 4, 2E3),
                $("#txtManager").focus();
                else ZENG.msgbox.show("\u8bf7\u8f93\u5165\u4ea7\u54c1\u540d\u79f0", 4, 2E3),
                $("#txtProductName").focus()
            }
        }
    },
    SaveProductMoudle: function(a) {
        var c = $(".switch-on"),
        d = "";
        $.each(c,
        function(a, c) {
            d += c.id.split("_")[1].toString() + ","
        });
        d = 0 < d.length ? d.substring(0, d.length - 1) : "";
        Service.post({
            url: "/TraceabilityService.svc/SaveProductMoudle",
            params: {
                ProductID: a,
                Moudleid: d
            },
            success: function(a) {
                115 == a.Status ? Messages.slideResult("\u63d0\u4ea4\u6210\u529f\uff01", 2E3,
                function() {
                    $(".BackUserCenter").trigger("click")
                }) : Messages.slideResult("\u63d0\u4ea4\u5931\u8d25\uff01", 2E3)
            },
            mask: function() {
                $("body").mask("\u6b63\u5728\u63d0\u4ea4\u6570\u636e,\u8bf7\u7a0d\u5019...")
            },
            unmask: function() {
                $("body").unmask()
            }
        })
    },
    getInputTextValue: function(a) {
        var c = "",
        d = !1;
        a = $("." + a);
        for (var l = 0; l < a.length; l++) c = 0 == l ? a[l].value: c + ("#" + a[l].value),
        "" == a[l].value && (d = !0);
        return c + "|" + d
    },
    GetProductRecordDetailData: function() {
        Service.post({
            url: "/TraceabilityService.svc/GetProductRecordDetailData",
            params: {
                ProductID: PubishSaveProduct.ProductRecordData.ProductID
            },
            success: function(a) {
                a && (PublishUpdateProduct.ShowProductBaseInfo(a[0]), PublishUpdateProduct.ShowGorwthCycle(a[1]), PublishUpdateProduct.ShowManure(a[2]), PublishUpdateProduct.ShowSpraying(a[3]), PublishUpdateProduct.ShowProCertified(a[4]), PublishUpdateProduct.ShowBuywayInfo(a[5]), PublishUpdateProduct.ShowProductMoudle(a[6]), PublishUpdateProduct.ShowDectionRecord(a[7]))
            }
        })
    },
    getRootPath: function() {
        var a = window.document.location.href,
        c = window.document.location.pathname,
        d = a.indexOf(c),
        a = a.substring(0, d);
        c.substring(0, c.substr(1).indexOf("/") + 1);
        return a
    }
};