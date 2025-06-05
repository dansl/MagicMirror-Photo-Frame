let DIM_LEVEL = "35";
let TIME_START = "0 7 * * *"; //7AM screen will light up and start slideshow
let TIME_END = "0 23 * * *"; //11PM screen will dim and stop slideshow

let config = {
	address: "localhost",
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",
	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 12,
	units: "imperial",
	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar",
		},
		{
			module: "clock",
			position: "bottom_left",
			classes: "fixed-page scheduler",
			config: {
				displaySeconds: false,
				module_schedule: {
					from: TIME_START,
					to: TIME_END,
					dimLevel: DIM_LEVEL,
				},
			},
		},
		{
			module: "weather",
			position: "bottom_right",
			header: "Weather Forecast",
			classes: "fixed-page scheduler",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 39.023934,
				lon: -94.694219,
				maxNumberOfDays: 4,
				module_schedule: {
					from: TIME_START,
					to: TIME_END,
					dimLevel: DIM_LEVEL,
				},
			},
		},
		{
			module: "MMM-BackgroundSlideshow",
			position: "fullscreen_below",
			classes: "page0",
			config: {
				imagePaths: ["/home/magicmirror/Pictures"],
				transitionImages: true,
				randomizeImageOrder: true,
				slideshowSpeed: 30000,
				showAllImagesBeforeRestart: true,
				backgroundSize: "contain",
				backgroundPosition: "center",
				backgroundAnimationEnabled: false,
				recursiveSubDirectories: true,
				transitionImages: true,
				transitions: ["opacity"],
				gradientDirection: "vertical",
				gradient: [
					"rgba(0, 0, 0, 0) 0%",
					"rgba(0, 0, 0, 0) 40%",
					"rgba(0, 0, 0, 0) 70%",
					"rgba(0, 0, 0, 0.75) 100%",
				],
				validImageFileExtensions: "bmp,jpg,jpeg,gif,png,heic",
				showProgressBar: true,
			},
		},
		{
			module: "compliments",
			position: "middle_center",
			classes: "page1 scheduler",
			config: {
				compliments: {
					anytime: ["Good Night"],
				},
				module_schedule: {
					from: TIME_START,
					to: TIME_END,
					dimLevel: DIM_LEVEL,
				},
			},
		},
		{
			module: "MMM-TouchButton",
			position: "top_right",
			classes: "page0 scheduler",
			config: {
				module_schedule: {
					from: TIME_START,
					to: TIME_END,
					dimLevel: DIM_LEVEL,
				},
				buttons: [
					{
						name: "Prev",
						icon: "fa fa-chevron-circle-left",
						notification: "BACKGROUNDSLIDESHOW_PREV",
					},
					{
						name: "Next",
						icon: "fa fa-chevron-circle-right",
						notification: "BACKGROUNDSLIDESHOW_NEXT",
					},
				],
			},
		},
		{
			module: "MMM-TouchButton",
			position: "top_left",
			classes: "page0 scheduler",
			config: {
				module_schedule: {
					from: TIME_START,
					to: TIME_END,
					dimLevel: DIM_LEVEL,
				},
				buttons: [
					{
						name: "Night",
						icon: "fa fa-moon-o fa-3x",
						notification: "PAGE_CHANGED",
						payload: 1,
					},
				],
			},
		},
		{
			module: "MMM-TouchButton",
			position: "top_left",
			classes: "page1 scheduler",
			config: {
				module_schedule: {
					from: TIME_START,
					to: TIME_END,
					dimLevel: DIM_LEVEL,
				},
				buttons: [
					{
						name: "Sun",
						icon: "fa fa-picture-o fa-3x",
						notification: "PAGE_CHANGED",
						payload: 0,
					},
				],
			},
		},
		{
			module: "MMM-pages",
			config: {
				modules: [["page0"], ["page1"], ["page2"]],
				fixed: ["fixed-page"],
			},
		},
		{
			module: "MMM-ModuleScheduler",
			config: {
				notification_schedule: [
					{ notification: "PAGE_CHANGED", schedule: TIME_START, payload: 0 }, //Main Page
					{ notification: "PAGE_CHANGED", schedule: TIME_END, payload: 1 }, // Night Page
				],
			},
		},
	],
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
