$(document).ready(function () {
		$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function (data) {
			console.log(JSON.stringify(data, null, 2));
			$("#ip").html(data.ip);
		});
		let apiKey = '11ded70c5b644ac7bbdaf3f46b73b269';
		$.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=' + apiKey, function (data) {
			console.log(JSON.stringify(data, null, 10));
			$(".json").html(JSON.stringify(data, null, 2));
			if (data.country_name == 'India') {
				$('.fact').append("<h2 id='india'>Fact about India</h2>");
				let facts = [
					"Yoga has its origins in India and has existed for over 5,000 years.",
					"Martial Arts were first created in India, and later spread to Asia by Buddhist missionaries.",
					"Jews and Christians have lived continuously in India since 200 B.C. and 52 A.D. respectively.",
					"Islam is India's and the world's second largest religion.",
					"Jainism and Buddhism were founded in India in 600 B.C. and 500 B.C. respectively.",
					"Until 1896, India was the only source of diamonds in the world",
					"India has the largest number of Post Offices in the world.",
					"Chess was invented in India.",
					"India is the largest democracy in the world, the 7th largest Country in the world, and one of the most ancient civilizations.",
					"The 'Place Value System' and the 'Decimal System' were developed in India in 100 B.C.",
					"Algebra, Trigonometry and Calculus are studies, which originated in India.",
					"India never invaded any country in her last 100000 years of history.",
					"The largest religious building in the world is Angkor Wat, a Hindu Temple in Cambodia built at the end of the 11th century.",
					"Sikhism originated in the Holy city of Amritsar in Punjab. Famous for housing the Golden Temple, the city was founded in 1577.",
					"The four religions born in India - Hinduism, Buddhism, Jainism, and Sikhism, are followed by 25% of the world's population.",
					"Indian National Kabaddi Team Has Won all World Cups",
					"More than 1,100 movies are produced, on average, each year - that's slightly ahead of Nigeria, twice as many as the American film industry and ten times as many as Britain produces.",
					"More than 40% of the world's annual output of mangoes are grown in India, far ahead of the competition from China, Thailand and Bangladesh.",
					"India is more obsessed with breaking records than any other country. Not something that I can prove with official sources, but I am pretty sure it is true.",
					"According to the Guinness Book of World Records, India ranks third behind the USA and the UK in the number of records claimed each year.",
					"According to the UN, Delhi is now the second-largest urban agglomeration in the world, with Mumbai ranked seventh and Calcutta tenth.",
					"India was once a continent. More than 100 million years ago, when dinosaurs roamed the earth, most of what is now India was an island.",
					"The 1961 census of India listed 1,652 languages, though some of these may have effectively been dialects, and a few languages have died out since then.",
					"The precise number of languages spoken in India is probably over 1,000, but it is often hard to define when one language begins and another ends.",
					"In the 17th century, Delhi was briefly the most populous city in the world, but by 1960, Delhi was not even in the top 30. The growth since then had been more than 4% per annum.",
					"His Holiness, the Dalai Lama, the exiled spiritual leader of Tibetan Buddhists, runs his government in exile from Dharmashala in northern India."
				];
				$('.fact').append('<p>' + facts[Math.floor(Math.random() * facts.length)] + '</p>')
				console.log('this a india');
			} else if (data.country_name == 'Turkey') {
				$('.fact').append("<h2 id='turkey'>Fact about Turkey</h2>");
				let facts = [
					"Turkey is the fourth-largest producer of tomatoes in the world.",
					"Turkey first joined the Olympic Games in the year 1908.",
					"The Evil Eye amulet is one of the most popular souvenirs in Turkey.",
					"Cars in Turkey have the driver’s seat at the right side.",
					"Many believe that Mount Ararat is where Noah’s ark landed.",
					"German naturalist Johann Jacob von Parrot wrote the book 'Journey to Ararat.'",
					"İztuzu Beach in Turkey is an important breeding ground for the loggerhead sea turtle.",
					"Turkey is the sixth most-visited tourist destination in the world.",
					"Turkey has one of the world’s biggest and oldest shopping malls.",
					"2.6 million Turkish soldiers joined World War I.",
					"Ottomans joined World War I before it was dissolved.",
					"Turkey became a country on October 29, 1923.",
					"Turkey's highest point is a dormant volcano.",
					"Istanbul in Turkey used to be the ancient city of Constantinople.",
					"Rome fell due to Turkey.",
					"Historians believe that agriculture started in Turkey.",
					"Istanbul Atatürk Airport in Turkey is connected to over 250 international destinations.",
					"Turkey's flag features a white star and crescent moon.",
					"The red in Turkey's flag has a long history.",
					"Turkey has one of the youngest populations in the world.",
					"Turkey has a rich ecology.",
					"A 7.4 magnitude earthquake once hit Marmara in Turkey in 1999.",
					"Tavuk Göğsü is Turkey's signature dessert.",	"",
					"Turkey has been producing wine since 4000 B.C.",
					"Turkey consumes the most tea in the world.",
					"According to Turkish tradition, life starts and ends with sweets.",
					"Turkey is the 5th highest producer of tea in the world.",
					"Turkey has the most number of mosques in the world.",
					"The Turkish didn't use surnames until the year 1934.",
					"The Ferrero SpA Company is Turkey's biggest market.",				];
				$('.fact').append('<p>' + facts[Math.floor(Math.random() * facts.length)] + '</p>')
			} else if (data.country_name == 'Russia') {
				$('.fact').append("<h2 id='russia'>Fact about Russia</h2>");
				let facts = [
					"The coldest inhabited town on Earth is in Russia",
					"One Russian region experiences sub-tropical weather",
					"The longest railway in the world is in Russia",
					"Gerard Depardieu technically lives in Russia",
					"The bloodiest siege in history was fought in Russia",
					"There’s a city in Russia that’s even more luxurious than Versailles",
					"Some Russians play golf with helicopters",
					"he nominal total GDP of the country is $2.02 trillion, while its nominal per capita GDP is $14,247.",
					"Russia runs under a federal semi-presidential constitutional republic with both a president and a Prime Minister.",
					"Most Russians live in apartments in the cities, and most family homes include grandparents.",
					"Traditional Russian foods include fish, potatoes and vegetables. Borscht is also a popular soup that is made from beets.",
					"The Trans-Siberian Railway is the best way to see most of Russia. If you get on the train at Moscow, it will take you six days to reach the Pacific Coast.",
					"Folk dancing is a huge tradition in Russia, and can sometimes even be seen on the Russian city streets.",
					"Moscow is home to 74 billionaires. This is more than any other city in the world.",
					"Russians will never shake hands if they are standing under a doorway. They believe it is bad luck, and will lead to arguments between the two citizens.",
					"New Years is celebrated twice in Russia. Once on January 1st, and again on the 14th of January. The 14th of January is known as the Orthodox Stule New Year.",
					"Siberia takes up about three-quarters of Russia's total land area.",
					"Russia has about 100,000 rivers -- including some of the longest and strongest rivers in the world. It also has the two largest lakes in Europe.",
					"About 80% of Russians are descendents of Slavs, who came to the area 1,500 years ago.",
					"The country has 86 republics, provinces, territories, and districts.",
					"9 million passengers ride Moscow's Metro system each day.",
					"Even though it takes up so much of Russia's land, Siberia is only inhabited by about 20% of the population."
				];
				$('.fact').append('<p>' + facts[Math.floor(Math.random() * facts.length)] + '</p>')
			} else if (data.country_code2 == 'US'){
				$('.fact').append("<h2 id='usa'>Fact about USA</h2>");
				let facts =[
					'Home To Some of The Best Musical Artist Of All Time',
					'Washington, DC Wasn’t Always The Capital Of America',
					'Las Vegas Is The Gambling Capital Of The World',
					'The US Doesn’t Have An Official Language',
					'The United States is the third largest country in the world by landmass – nearly as big as the entire continent of Europe.',
					'American athletes have won more Olympic medals than athletes from any other country.',
					'The United States is the third most visited country by international tourists after Spain and France.',
					'There Is a City Named Boring And It’s In Oregon',
					'The United States is the third most visited country by international tourists after Spain and France.',
					'The United States is home to nearly 45 million immigrants – more than any other country in the world.',
					'The U.S. film industry is the largest, oldest, and most profitable film industry in the world. According to research firm IBISWorld, the American film industry generated about $33 billion in 2019.',
					'Nearly one-third of all land in the United States – or about 650 million acres – is federally owned.',
					'On any given day in the United States, about 84.8 million adults – 37% of the adult population – consume fast food, according to the Centers for Disease Control and Prevention.',
					'The United States is at the center of global invention. Airplanes, computers, cellphones, potato chips, and the light bulb are just a few examples of American ingenuity.',
					'There are an estimated 75.8 million dogs in the United States, more than double the number in Brazil, the country with the second most dogs.',
					"Though the United States is home to less than 5% of the world's population, it accounts for approximately 25% of global economic output.",
					'Approximately 43 million Americans identify as ancestrally German, more than any other nationality.',
					'The United States is one of only three countries that have not officially switched to the metric system. Liberia and Burma are the other two.',
					'The government chose to color U.S. currency green as an anti-counterfeiting strategy. When the color was adopted in the 19th century, cameras could only take black and white photographs, making imitation bills difficult to produce.',
					'Over half of the U.S. population lives in just nine states: California, Texas, Florida, New York, Pennsylvania, Illinois, Ohio, Georgia, and North Carolina.',
				]
				$('.fact').append('<p>' + facts[Math.floor(Math.random() * facts.length)] + '</p>')
			}
			$("#ipv6").html(data.ip);
			$("#crn").html(data.currency.name);
			$("#cn").html(data.country_name);
			$("#isp").html(data.isp);
			$("#ct").html(data.city);
			$("#dist").html(data.district);
			$("#country-code").html(data.country_code2);
			$("#st").html(data.state_prov);
			$("#post").html(data.zipcode);
			$("#loc").html(data.longitude);
			$("#loc2").html(data.latitude);
			$("#zone").html(data.time_zone.name);
			longitude = data.longitude;
			latitude = data.latitude;
			mapboxgl.accessToken =
				'pk.eyJ1Ijoic2h1YmhhbXByYXNoYXIwMDEiLCJhIjoiY2twazJ3ODA0MGh5ejJvcXJ3eWtoYjBicSJ9.0AZHao6AZK6szIenar3EBQ';
			var map = new mapboxgl.Map({
				container: 'map',
				zoom: 14,
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [longitude, latitude],
			});
			var marker1 = new mapboxgl.Marker()
				.setLngLat([longitude, latitude])
				.addTo(map);
		});

	});

	function copyit(el) {
		// Copy textarea, pre, div, etc.
		if (document.body.createTextRange) {
			// IE 
			var textRange = document.body.createTextRange();
			textRange.moveToElementText(el);
			textRange.selecopyit();
			textRange.execCommand("Copy");
			//tooltip(el, "Copied!");  
		} else if (window.getSelection && document.createRange) {
			// non-IE
			var editable = el.contentEditable; // Record contentEditable status of element
			var readOnly = el.readOnly; // Record readOnly status of element
			el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
			el.readOnly =
				true; // iOS will not select in a read only form element // Version 1.2c - Changed from false to true; Prevents keyboard from appearing when copying from textarea
			var range = document.createRange();
			range.selectNodeContents(el);
			var sel = window.getSelection();
			sel.removeAllRanges();
			sel.addRange(range); // Does not work for Firefox if a textarea or input
			if (el.nodeName == "TEXTAREA" || el.nodeName == "INPUT")
				el.selecopyit(); // Firefox will only select a form element with selecopyit()
			//if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i)) // Version 1.2c - iOS 12 might be defaulting to desktop mode so removed
			if (el
				.setSelectionRange
				) // Version 1.2c - iOS 12 might be defaulting to desktop mode and no longer has iphone in user agent
				el.setSelectionRange(0, 999999); // iOS only selects "form" elements with SelectionRange
			el.contentEditable = editable; // Restore previous contentEditable status
			el.readOnly = readOnly; // Restore previous readOnly status 
			if (document.queryCommandSupported("copy")) {
				var successful = document.execCommand('copy');
				if (successful) $('body').append(
					'<p class="copied"><input class="text" value="Your lovely IP" /><span class="copybtn">✔ Copied !</span></p>'
				), setTimeout(function () {
					$('.copied').remove();
				}, 1000)
				else $('body').append('<p class="copied"><input class="text" value="Press CTRL+C to copy" /></p>'),
					setTimeout(function () {
						$('.copied').remove();
					}, 1000)
			} else {
				if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i))
					$('body').append('<p class="copied"><input class="text" value="Press CTRL+C to copy" /></p>'),
					setTimeout(function () {
						$('.copied').remove();
					}, 1000)
			}
		}
	}
