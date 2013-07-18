package DDG::Spice::CouponMountain;

use DDG::Spice;

name "CouponMountain";
description "Get the newest code for you";
source "coupon";
primary_example_queries "coupon";
secondary_example_queries "coupon dell";
category "bang";
topics "everyday", "food_and_drink";
icon_url "/i/couponmountain.com.ico";
code_url "https://github.com/duckduckgo/zeroclickinfo-spice/blob/master/lib/DDG/Spice/CouponMountain.pm";
attribution github => ["https://github.com/mosico", "Mosico"],
            twitter => ["https://twitter.com/sicomo", "Mosico"];

triggers end => "coupon code", "coupon codes";
triggers any => "coupon", "coupons";

spice from => '([^/]+)/?([^/]+)?';
spice to => 'http://mamsweb101.dev.wl.mezimedia.com:8081/Coupon/searchEngine.html?keyword=$1&tabUrl=$2';
spice wrap_jsonp_callback => 1;

spice is_cached => 0;

handle query => sub {
	return unless (length $_);
	my $refer = $ENV{HTTP_REFERER};
	return $_, $refer;
};

1;
