// spice callback function
function ddg_spice_coupon_mountain (api_result) {

    if (api_result.count < 1) return;

    //var q = api_result.q.replace(/\s/g, '+');
    //var relevants = getRelevant(api_result.results);
    var relevants = api_result.coupon;

    if (!relevants) return;

    Spice.render({
        data: api_result,
        source_name: 'CouponMountain',
        source_url: 'http://www.couponmountain.com',
        header1: 'Coupons (CMUS)',
        //force_big_header: true,
        //more_logo: "quixey_logo.png",
        template_frame: "carousel",
        template_normal: "coupon_mountain",
        carousel_css_id: "coupon_mountain",
        carousel_template_detail: "coupon_mountain_detail",
        carousel_items: relevants
    });
}

var isReset = false;
function resetLiSize() {
	if (isReset) return;
	var liHandle = $("#ddgc_slides li");
	if (liHandle.length > 0) {
		$("#ddgc_slider").css("height", "140px");
		$("#ddgc_frame").css("height", "140px");
		$("#ddgc_slides").css("height", "140px");
		$("#ddgc_slides li").css({width: "160px", height: "138px"});
		isReset = true;
	} else {
		setTimeout(resetLiSize, 200);
	}
}

$(document).ready(function(){
	resetLiSize();
});
