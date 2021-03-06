export const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const shuffle = (array) => {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

// So I don't get rate limited hehehehehehehehehe
export const MOCK_DATA = [
	{
		copyright: 'Soumyadeep Mukherjee',
		date: '2022-01-01',
		explanation:
			"very Full Moon of 2021 shines in this year-spanning astrophoto project, a composite portrait of the familiar lunar nearside at each brightest lunar phase. Arranged by moonth, the year progresses in stripes beginning at the top. Taken with the same camera and lens the stripes are from Full Moon images all combined at the same pixel scale. The stripes still look mismatched, but they show that the Full Moon's angular size changes throughout the year depending on its distance from Kolkata, India, planet Earth. The calendar month, a full moon name, distance in kilometers, and angular size is indicated for each stripe. Angular size is given in minutes of arc corresponding to 1/60th of a degree. The largest Full Moon is near a perigee or closest approach in May. The smallest is near an apogee, the most distant Full Moon in December. Of course the full moons of May and November also slid into Earth's shadow during 2021's two lunar eclipses.",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/MoonstripsAnnotatedIG.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'The Full Moon of 2021',
		url: 'https://apod.nasa.gov/apod/image/2201/MoonstripsAnnotatedIG_crop1024.jpg',
	},
	{
		copyright: 'Dani Caxete',
		date: '2022-01-02',
		explanation:
			'Sometimes falling ice crystals make the atmosphere into a giant lens causing arcs and halos to appear around the Sun or Moon. One Saturday night in 2012 was just such a time near Madrid, Spain, where a winter sky displayed not only a bright Moon but four rare lunar halos.  The brightest object, near the top of the featured image, is the Moon. Light from the Moon refracts through tumbling hexagonal ice crystals into a somewhat rare 22-degree halo seen surrounding the Moon. Elongating the 22-degree arc horizontally is a more rare circumscribed halo caused by column ice crystals. Even more rare, some moonlight refracts through more distant tumbling ice crystals to form a (third) rainbow-like arc 46 degrees from the Moon and appearing here just above a picturesque winter landscape. Furthermore, part of a whole 46-degree circular halo is also visible, so that an extremely rare -- especially for the Moon --  quadruple halo  was captured. Far in the background is a famous winter skyscape that includes Sirius, the belt of Orion, and Betelgeuse -- visible between the inner and outer arcs. Halos and arcs typically last for minutes to hours, so if you do see one there should be time to invite family, friends or neighbors to share your unusual lensed vista of the sky.',
		hdurl: 'https://apod.nasa.gov/apod/image/2201/lunararcs_caxete_1280.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'Quadruple Lunar Halo Over Winter Road',
		url: 'https://apod.nasa.gov/apod/image/2201/lunararcs_caxete_960.jpg',
	},
	{
		copyright: 'Jan Hattenbach',
		date: '2022-01-03',
		explanation:
			"You couldn't see Comet Leonard???s extremely long tail with a telescope ??? it was just too long. You also couldn't see it with binoculars ??? still too long. Or with your eyes -- it was too dim. Or from a city ??? the sky was too bright. But from a dark location with a low horizon ??? your camera could. And still might -- if the comet survives today's closest encounter with the Sun, which occurs between the orbits of Mercury and Venus. The featured picture was created from two deep and wide-angle camera images taken from La Palma in the Canary Islands of Spain late last month.  Afterwards, if it survives, what is left of Comet Leonard's nucleus will head out of our Solar System, never to return.",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/LeonardTail_Hattenbach_1600.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: "Comet Leonard's Long Tail",
		url: 'https://apod.nasa.gov/apod/image/2201/LeonardTail_Hattenbach_960.jpg',
	},
	{
		date: '2022-01-04',
		explanation:
			"What's happened to that moon of Saturn? Nothing -- Saturn's moon Rhea is just partly hidden behind Saturn's rings. In 2010, the robotic Cassini spacecraft then orbiting Saturn took this narrow-angle view looking across the Solar System's most famous rings. Rings visible in the foreground include the thin F ring on the outside and the much wider A and B rings just interior to it. Although it seems to be hovering over the rings, Saturn's moon Janus is actually far behind them.  Janus is one of Saturn's smaller moons and measures only about 180 kilometers across. Farther out from the camera is the heavily cratered Rhea, a much larger moon measuring 1,500 kilometers across. The top of Rhea is visible only through gaps in the rings. After more than a decade of exploration and discovery, the Cassini spacecraft ran low on fuel in 2017 and was directed to enter Saturn's atmosphere, where it surely melted.   Explore Your Universe: Random APOD Generator",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/RheaJanus_Cassini_1020.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'Moons Beyond Rings at Saturn',
		url: 'https://apod.nasa.gov/apod/image/2201/RheaJanus_Cassini_1020.jpg',
	},
	{
		copyright: 'Luca Vanzella',
		date: '2022-01-05',
		explanation:
			"Does the Sun always rise in the same direction?  No.  As the months change, the direction toward the rising Sun changes, too.  The featured image shows the direction of sunrise every month during 2021 as seen from the city of Edmonton, Alberta, Canada. The camera in the image is always facing due east, with north toward the left and south toward the right.  As shown in an accompanying video, the top image was taken in 2020 December, while the bottom image was captured in 2021 December, making 13 images in total. Although the Sun always rises in the east in general, it rises furthest to the south of east near the December solstice, and furthest north of east near the June solstice. In many countries, the December Solstice is considered an official change in season: for example the first day of winter in the North.  Solar heating and stored energy in the Earth's surface and atmosphere are near their lowest during winter, making the winter season the coldest of the year.    Status Updates: Deploying the James Webb Space Telescope",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/SunriseYear_Vanzella_2400.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'A Year of Sunrises',
		url: 'https://apod.nasa.gov/apod/image/2201/SunriseYear_Vanzella_960.jpg',
	},
	{
		copyright: 'Tamas Ladanyi',
		date: '2022-01-06',
		explanation:
			"That's not a young crescent Moon posing behind cathedral towers after sunset. It's Venus in a crescent phase. About 40 million kilometers away and about 2 percent illuminated by sunlight, it was captured with camera and telephoto lens in this series of exposures as it set in western skies on January 1 from Veszprem, Hungary. The bright celestial beacon was languishing in the evening twilight, its days as the Evening Star coming to a close as 2022 began. But it was also growing larger in apparent size and becoming an ever thinner crescent in telescopic views. Heading toward a (non-judgemental) inferior conjunction, the inner planet will be positioned between Earth and Sun on January 9 and generally lost from view in the solar glare. A crescent Venus will soon reappear though. Rising in the east by mid-month just before the Sun as the brilliant Morning Star.   Status Updates: Deploying the James Webb Space Telescope",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/venus_220101_ladanyi_web.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'The Last Days of Venus as the Evening Star',
		url: 'https://apod.nasa.gov/apod/image/2201/venus_220101_ladanyi_web1024.jpg',
	},
	{
		copyright: 'Point Blue Conservation Science',
		date: '2022-01-07',
		explanation:
			"A male Adelie penguin performed this Ecstatic Vocalization in silhouette during the December 4 solar eclipse, the final eclipse of 2021. Of course his Ecstatic Vocalization is a special display that male penguins use to claim their territory and advertise their condition. This penguin's territory, at Cape Crozier Antarctica, is located in one of the largest Adelie penguin colonies. The colony has been studied by researchers for over 25 years. From there, last December's eclipse was about 80 percent total when seen at its maximum phase as the Moon's shadow crossed planet Earth's southernmost continent.   Status Updates: Deploying the James Webb Space Telescope",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/eclipse_EV.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'Ecstatic Solar Eclipse',
		url: 'https://apod.nasa.gov/apod/image/2201/eclipse_EV1024.jpg',
	},
	{
		copyright: 'Cheng Luo',
		date: '2022-01-08',
		explanation:
			"Named for a forgotten constellation, the Quadrantid Meteor Shower puts on an annual show for planet Earth's northern hemisphere skygazers. The shower's radiant on the sky lies within the old, astronomically obsolete constellation Quadrans Muralis. That location is not far from the Big Dipper, at the boundaries of the modern constellations Bootes and Draco. In fact north star Polaris is just below center in this frame and the Big Dipper asterism (known to some as the Plough) is above it, with the meteor shower radiant to the right. Pointing back toward the radiant, Quadrantid meteors streak through the night in the panoramic skyscape, a composite of images taken in the hours around the shower's peak on January 4, 2022. Arrayed in the foreground are radio telescopes of the Chinese Spectral Radioheliograph, Mingantu Observing Station, Inner Mongolia, China. A likely source of the dust stream that produces Quadrantid meteors was identified in 2003 as an asteroid.   Status Updates: Deploying the James Webb Space Telescope",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/QuadrantidsnorthernskyRadioTelescopeArray.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'Quadrantids of the North',
		url: 'https://apod.nasa.gov/apod/image/2201/QuadrantidsnorthernskyRadioTelescopeArray1024.jpg',
	},
	{
		date: '2022-01-09',
		explanation:
			"What will become of Jupiter's Great Red Spot?  Gas giant Jupiter is the solar system's largest world with about 320 times the mass of planet Earth. Jupiter is home to one of the largest and longest lasting storm systems known, the Great Red Spot (GRS), visible to the left. The GRS is so large it could swallow Earth, although it has been shrinking.  Comparison with historical notes indicate that the storm spans only about one third of the exposed surface area it had 150 years ago. NASA's Outer Planets Atmospheres Legacy (OPAL) program has been monitoring the storm more recently using the Hubble Space Telescope. The featured Hubble OPAL image shows Jupiter as it appeared in 2016, processed in a way that makes red hues appear quite vibrant. Modern GRS data indicate that the storm continues to constrict its surface area, but is also becoming slightly taller, vertically.  No one knows the future of the GRS, including the possibility that if the shrinking trend continues, the GRS might one day even do what smaller spots on Jupiter have done -- disappear completely.    Tuesday over Zoom: APOD editor to present the Best APOD Space Images of 2021",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/JupiterOpal_HubbleMasztalerz_1880.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: "Hubble's Jupiter and the Shrinking Great Red Spot",
		url: 'https://apod.nasa.gov/apod/image/2201/JupiterOpal_HubbleMasztalerz_960.jpg',
	},
	{
		date: '2022-01-10',
		explanation:
			"Why does Comet Leonard's tail wag? The featured time-lapse video shows the ion tail of Comet C/2021 A1 (Leonard) as it changed over ten days early last month.  The video was taken by NASA's Solar Terrestrial Relations Observatory-Ahead (STEREO-A) spacecraft that co-orbits the Sun at roughly the same distance as the Earth. Each image in this 29-degree field was subtracted from following image to create frames that highlight differences. The video clearly shows Comet Leonard's long ion tail extending, wagging, and otherwise being blown around by the solar wind -- a stream of fast-moving ions that stream out from the Sun.  Since the video was taken, Comet Leonard continued plunging toward the Sun, reached its closest approach to the Sun between the orbits of Mercury and Venus, survived this closest approach without breaking apart, and is now fading as heads out of our Solar System.   Tuesday over Zoom: APOD editor to present the Best APOD Space Images of 2021",
		media_type: 'video',
		service_version: 'v1',
		thumbnail_url: 'https://img.youtube.com/vi/RtDSxi-D4KA/0.jpg',
		title: "Comet Leonard's Tail Wag",
		url: 'https://www.youtube.com/embed/RtDSxi-D4KA?rel=0',
	},
	{
		copyright: 'Matt HarbisonSpace4Everybody',
		date: '2022-01-11',
		explanation:
			"You may have seen Orion's belt before -- but not like this. The three bright stars across this image are, from left to right, Mintaka, Alnilam, and Alnitak: the iconic belt stars of Orion. The rest of the stars in the frame have been digitally removed to highlight the surrounding clouds of glowing gas and dark dust. Some of these clouds have intriguing shapes, including the Horsehead and Flame Nebulas, both near Alnitak on the lower right.  This deep image, taken last month from the Marathon Skypark and Observatory in Marathon, Texas, USA, spans about 5 degrees, required about 20 hours of exposure, and was processed to reveal the gas and dust that we would really see if we were much closer. The famous Orion Nebula is off to the upper right of this colorful field.  The entire region lies only about 1,500 light-years distant and so is one of the closest and best studied star formation nurseries known.    Tonight: APOD Editor to Present the Best Space Images of 2021",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_5000.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: "Orion's Belt Region in Gas and Dust",
		url: 'https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_1080.jpg',
	},
	{
		copyright: 'Blake Estesitelescope.net',
		date: '2022-01-12',
		explanation:
			"What does Comet Leonard look like up close? Although we can't go there, imaging the comet's coma and inner tails through a small telescope gives us a good idea.  As the name implies, the ion tail is made of ionized gas -- gas energized by ultraviolet light from the Sun and pushed outward by the solar wind.  The solar wind is quite structured and sculpted by the Sun's complex and ever changing magnetic field. The effect of the variable solar wind combined with different gas jets venting from the comet's nucleus accounts for the tail's complex structure.  Following the wind, structure in Comet Leonard's tail can be seen to move outward from the Sun even alter its wavy appearance over time.  The blue color of the ion tail is dominated by recombining carbon monoxide molecules, while the green color of the coma surrounding the head of the comet is created mostly by a slight amount of recombining diatomic carbon molecules. Diatomic carbon is destroyed by sunlight in about 50 hours -- which is why its green glow does not make it far into the ion tail. The featured image was taken on January 2 from Siding Spring Observatory in Australia.  Comet Leonard, presently best viewed from Earth's Southern Hemisphere, has rounded the Sun and is now headed out of the Solar System.",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/CometLeonard_Estes_3000.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'Comet Leonard Closeup from Australia',
		url: 'https://apod.nasa.gov/apod/image/2201/CometLeonard_Estes_960.jpg',
	},
	{
		copyright: 'Jason Dain',
		date: '2022-01-13',
		explanation:
			"It's easy to get lost following the intricate, looping, twisting filaments in this detailed image of supernova remnant Simeis 147. Also cataloged as Sharpless 2-240 it goes by the popular nickname, the Spaghetti Nebula. Seen toward the boundary of the constellations Taurus and Auriga, it covers nearly 3 degrees or 6 full moons on the sky. That's about 150 light-years at the stellar debris cloud's estimated distance of 3,000 light-years. This composite includes image data taken through narrow-band filters where reddish emission from ionized hydrogen atoms and doubly ionized oxygen atoms in faint blue-green hues trace the shocked, glowing gas. The supernova remnant has an estimated age of about 40,000 years, meaning light from the massive stellar explosion first reached Earth 40,000 years ago. But the expanding remnant is not the only aftermath. The cosmic catastrophe also left behind a spinning neutron star or pulsar, all that remains of the original star's core.",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/HOOClassicBinned_ps2048.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'Supernova Remnant Simeis 147',
		url: 'https://apod.nasa.gov/apod/image/2201/HOOClassicBinned_ps1024.jpg',
	},
	{
		copyright: 'Mark Hanson',
		date: '2022-01-14',
		explanation:
			"An island universe of billions of stars, NGC 1566 lies about 60 million light-years away in the southern constellation Dorado. Popularly known as the Spanish Dancer galaxy, it's seen face-on from our Milky Way perspective. A gorgeous grand design spiral, this galaxy's two graceful spiral arms span over 100,000 light-years, traced by bright blue star clusters, pinkish starforming regions, and swirling cosmic dust lanes. NGC 1566's flaring center makes the spiral one of the closest and brightest Seyfert galaxies. It likely houses a central supermassive black hole wreaking havoc on surrounding stars, gas, and dust. In this sharp southern galaxy portrait, the spiky stars lie well within the Milky Way.",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/NGC1566LRGBHa-Hanson-SelbyFinal2048.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'NGC 1566: The Spanish Dancer Spiral Galaxy',
		url: 'https://apod.nasa.gov/apod/image/2201/NGC1566LRGBHa-Hanson-SelbyFinal1024.jpg',
	},
	{
		date: '2022-01-15',
		explanation:
			"Looping through the Jovian system in the late 1990s, the Galileo spacecraft recorded stunning views of Europa and uncovered evidence that the moon's icy surface likely hides a deep, global ocean. Galileo's Europa image data has been remastered here, with improved calibrations to produce a color image approximating what the human eye might see. Europa's long curving fractures hint at the subsurface liquid water.  The tidal flexing the large moon experiences in its elliptical orbit around Jupiter supplies the energy to keep the ocean liquid. But more tantalizing is the possibility that even in the absence of sunlight that process could also supply the energy to support life, making Europa one of the best places to look for life beyond Earth. What kind of life could thrive in a deep, dark, subsurface ocean? Consider planet Earth's own extreme shrimp.",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/PIA19048europa.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: "Galileo's Europa",
		url: 'https://apod.nasa.gov/apod/image/2201/PIA19048europa1024.jpg',
	},
	{
		copyright: 'Alan DyerThe Amazing Sky',
		date: '2022-01-16',
		explanation:
			'What type of cloud is that? This retreating cumulonimbus cloud, more commonly called a thundercloud, is somewhat unusual as it contains the unusual bumpiness of a mammatus cloud on the near end, while simultaneously producing falling rain on the far end. Taken in mid-2013 in southern Alberta, Canada, the cloud is moving to the east, into the distance, as the sun sets in the west, behind the camera. In the featured image, graphic sunset colors cross the sky to give the already photogenic cloud striking orange and pink hues. A darkening blue sky covers the background. Further in the distance, a rising, waxing, gibbous moon is visible on the far right.',
		hdurl: 'https://apod.nasa.gov/apod/image/2201/thundercloud_dyer_2000.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'A Retreating Thunderstorm at Sunset',
		url: 'https://apod.nasa.gov/apod/image/2201/thundercloud_dyer_1592.jpg',
	},
	{
		copyright: "Jarmo RuuthTelescope LiveHeaven's Mirror Observatory",
		date: '2022-01-17',
		explanation:
			'Sometimes the dark dust of interstellar space has an angular elegance.  Such is the case toward the far-south constellation of Chamaeleon. Normally too faint to see, dark dust is best known for blocking visible light from stars and galaxies behind it. In this four-hour exposure, however, the dust is seen mostly in light of its own, with its strong red and near-infrared colors giving creating a brown hue. Contrastingly blue, the bright star Beta Chamaeleontis is visible just to the right of center, with the dust that surrounds it preferentially reflecting blue light from its primarily blue-white color.  All of the pictured stars and dust occur in our own Milky Way Galaxy with -- but one notable exception: the white spot just below Beta Chamaeleontis is the galaxy IC 3104 which lies far in the distance.  Interstellar dust is mostly created in the cool atmospheres of giant stars and dispersed into space by stellar light, stellar winds, and stellar explosions such as supernovas.',
		hdurl: 'https://apod.nasa.gov/apod/image/2201/DarkNebulaVd_HmoRuuth_4096.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'Chamaeleon Dark Nebulas',
		url: 'https://apod.nasa.gov/apod/image/2201/DarkNebulaVd_HmoRuuth_960.jpg',
	},
	{
		copyright: 'Lucy Yunxi Hu',
		date: '2022-01-18',
		explanation:
			"This is a sky filled with glowing icons. On the far left is the familiar constellation of Orion, divided by its iconic three-aligned belt stars and featuring the famous Orion Nebula, both partly encircled by Barnard's Loop. Just left of center in the featured image is the brightest star in the night: Sirius. Arching across the image center is the central band of our Milky Way Galaxy. On the far right, near the top, are the two brightest satellite galaxies of the Milky Way: the Large Magellanic Cloud (LMC), and the Small Magellanic Cloud (SMC). Also on the far right -- just above the cloudy horizon -- is the constellation of Crux, complete with the four stars that make the iconic Southern Cross. The featured image is a composite of 18 consecutive exposures taken by the same camera and from the same location in eastern Australia during the last days of last year.  In the foreground, picturesque basalt columns of the Bombo Quarry part to reveal the vast Pacific Ocean.",
		hdurl: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_7441.jpg',
		media_type: 'image',
		service_version: 'v1',
		title: 'From Orion to the Southern Cross',
		url: 'https://apod.nasa.gov/apod/image/2201/OrionCross_LucyH_1080.jpg',
	},
];
