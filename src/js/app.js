$(function() {
	// Assign jQuery selectors to variables for better performance.
	var mobileMenu = $('#mobile-menu'),
		mobileMenuTrigger = $('#mobile-menu-trigger'),
		mobileMainMenu = $('.mobile-main-menu'),
		mobileSubMenu = $('.mobile-submenu');

	// Mobile hamburger menu functionality.
	mobileMenuTrigger.click(function() {
		$(this).toggleClass('open');
		mobileMenu.toggleClass('active');
	});

	$('.submenu-trigger').click(function() {
		mobileMainMenu.fadeOut(500, function() {
			mobileSubMenu.toggleClass('visible');
		});
	});

	$('.return').click(function() {
		if (!mobileMainMenu.is(':visible')) {
			mobileSubMenu.toggleClass('visible');
			mobileMainMenu.fadeIn(1000);
		} else {
			mobileMenu.toggleClass('active');
			mobileMenuTrigger.toggleClass('open');
		}
	});

	// Hard-coded list of attendees or speakers.
	var attendees = [{
			avatar: "img/attendees/AlarconG.jpg",
			name: "Gretchen Alarcon",
			occupation: "Group VP Product Strategy<br>Oracle",
			summary: "Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. "+
				     "Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.",
			twitter: "https://twitter.com/GretchenA",
			linkedIn: "https://www.linkedin.com/in/gretchenalarcon",
			website: "https://www.oracle.com/index.html"
		}, {
			avatar: "img/attendees/AverbookJ.jpg",
			name: "Jason Averbook",
			occupation: "CEO<br>LeapGen",
			summary: "Jason Averbook is recognized as one of the top thought leaders in the space of HR, workforce and enterprise technology. As one CEO "+
				     "has said about Jason, He just gets it and can put it into language that we get.",
			twitter: "https://twitter.com/jasonaverbook",
			linkedIn: "https://www.linkedin.com/in/jasonaverbook",
			website: "http://www.jasonaverbook.com/"
		}, {
			avatar: "img/attendees/BersinJ.jpg",
			name: "Josh Bersin",
			occupation: "Principal & Founder<br>Bersin by Deloitte",
			summary: "Listed in the Top 100 Influencers in HR globally and the Top 25 Influencers in Talent Management, Josh Bersin has made Bersin by "+
					 "Deloitte the “go to” source for learning and HR decision makers seeking product and market data.",
			twitter: "",
			linkedIn: "https://www.linkedin.com/in/bersin",
			website: "http://home.bersin.com/"
		}, {
			avatar: "img/attendees/BloomN.jpg",
			name: "Naomi Bloom",
			occupation: "Managing Partner<br>Bloom & Wallace",
			summary: "Naomi is the leading independent voice and a formidable advocate for the HRM community, focused entirely on achieving breakthroughs "+
					 "in organizational performance through effective HRM enabled by great HR technology.",
			twitter: "https://twitter.com/InFullBloomUS",
			linkedIn: "https://www.linkedin.com/in/naomibloom",
			website: "http://infullbloom.us/"
		}, {
			avatar: "img/attendees/BotsmanR.jpg",
			name: "Rachel Botsman",
			occupation: "Founder<br>Collaborative Lab",
			summary: "Rachel is a global thought leader on the power of collaboration through technology to transform the way we live. Listed on TIME as "+
			 		 "'10 Ideas That Will Change The World' and Fast Company as one of the ‘Most Creative People in Business.",
			twitter: "https://twitter.com/rachelbotsman",
			linkedIn: "https://www.linkedin.com/in/rachel-botsman-798696b",
			website: "https://www.collaborativelabs.com/"
		}, {
			avatar: "img/attendees/BradyKarrenB.jpg",
			name: "Baroness Karren Brady",
			occupation: "Leading UK Female Business Leader<br>CEO of West Ham United Football Club",
			summary: "Voted Business Woman of the Year, Ultimate Entrepreneur and rated among the 50 most inspirational people in the world, she is "+
					 "passionate about business and the promotion of women in business in the UK.",
			twitter: "https://twitter.com/karren_brady",
			linkedIn: "",
			website: "http://www.karrenbrady.com/"
		}, {
			avatar: "img/attendees/BransonRichardS.jpg",
			name: "Sir Richard Branson",
			occupation: "Founder<br>Virgin Group",
			summary: "Virgin Group holds +200 companies, including the recent Virgin Galactic. Sir Richard Branson is one of the world’s greatest "+
				     "entrepreneurs known for his adventurous spirit, irresistible charm & charisma and sporting achievements.",
			twitter: "https://twitter.com/richardbranson",
			linkedIn: "https://www.linkedin.com/in/rbranson",
			website: "https://www.virgin.com/"
		}, {
			avatar: "img/attendees/HinssenP.jpg",
			name: "Peter Hinssen",
			occupation: "Chairman & Co-Founder<br>Nexxworks",
			summary: "Peter is Europe’s thought leader on disruptive innovation. He has moved on from a deep passion for all things technology to believing "+
				     "that digital is ‘merely’ a spark, an enabler and that networks are the true drivers of progress.",
			twitter: "https://twitter.com/hinssen",
			linkedIn: "https://www.linkedin.com/in/phinssen",
			website: "http://nexxworks.com/"
		}, {
			avatar: "img/attendees/LaneM.jpg",
			name: "Martha Lane Fox",
			occupation: "Founder & Executive Chair<br>Odoteveryone.org.uk",
			summary: "A firm believer in putting the internet at the heart of things Martha co-founded Lastminute.com which she sold in 2005. She joined the "+
					 "House of Lords in 2013, becoming its youngest female member.",
			twitter: "",
			linkedIn: "https://www.linkedin.com/in/marthal2",
			website: "https://doteveryone.org.uk/"
		}, {
			avatar: "img/attendees/LazorthesC.jpg",
			name: "Céline Lazorthes",
			occupation: "Founder & CEO<br>MANGOPAY",
			summary: "Céline Lazorthes is the optimistic and passionate CEO of the Leetchi Group which includes leetchi.com and MANGOPAY. Deeply engaged in "+
					 "the start-up community, Céline is an active business angel and a regular speaker on entrepreneurship.",
			twitter: "https://twitter.com/CelineLz",
			linkedIn: "https://fr.linkedin.com/in/lazorthes",
			website: "https://www.mangopay.com/"
		}, {
			avatar: "img/attendees/LevensalerL.jpg",
			name: "Leighanne Levensaler",
			occupation: "Senior Vice President<br>Workday",
			summary: "Leighanne is Senior Vice President at Workday and is responsible for product direction and management and features in The Most Influential "+
					 "Women 2015. Fortune rank Workday as one of the 100 best companies to work for.",
			twitter: "https://twitter.com/LeighLevensaler",
			linkedIn: "https://www.linkedin.com/in/leighannelevensaler",
			website: "https://www.workday.com/"
		}, {
			avatar: "img/attendees/MarkidesC.jpg",
			name: "Costas Markides",
			occupation: "Professor of Strategy & Entrepreneurship<br>London Bussiness School",
			summary: "Costas Markides is Professor of Strategy and Entrepreneurship and holds the Robert P. Bauman Chair of Strategic Leadership at the London "+
					 "Business School (University of London). He was listed among the Forbes.com list of Most Influential Management Gurus.",
			twitter: "",
			linkedIn: "",
			website: "https://www.london.edu/"
		}, {
			avatar: "img/attendees/MazzellaF.jpg",
			name: "Frédéric Mazzella",
			occupation: "Founder & CEO<br>blaBlaCar",
			summary: "Frédéric Mazzella is the Founder and CEO of BlaBlaCar, the leading European ridesharing community that connects drivers with empty seats and "+
					 "people traveling the same way.",
			twitter: "https://twitter.com/mazaic",
			linkedIn: "",
			website: ""
		}, {
			avatar: "img/attendees/MorieuxY.jpg",
			name: "Yves Morieux",
			occupation: "Managing Director<br>Boston Consulting Group",
			summary: "Yves researches how corporations can adapt to a modern and complex business landscape and his approach, he calls it Smart Simplicity, encourages "+
					 "employees to cooperate in order to solve long-term problems.",
			twitter: "",
			linkedIn: "https://www.linkedin.com/pub/yves-morieux/0/969/395",
			website: "http://www.bcg.com/"
		}, {
			avatar: "img/attendees/OtterT.jpg",
			name: "Thomas Otter",
			occupation: "Group Vice President Product Management<br>SAP SuccessFactors",
			summary: "Thomas has a globally renowned background in HCM trends and has a deep interest in new technologies such as social software, mobile, analytics "+
					 "and cloud computing that improve HR and overall organizational performance.",
			twitter: "",
			linkedIn: "https://www.linkedin.com/in/thomasotter",
			website: ""
		}, {
			avatar: "img/attendees/ParmarB.jpg",
			name: "Belinda Parmar",
			occupation: "Founder & CEO<br>The Empathy Business",
			summary: "Belinda is the CEO of the Empathy Business, and Founder of Little Miss Geek. She was named one of Business Insider's 'The 100 Most Influential "+
					 "Tech Women on Twitter'. A leading expert on empathy in the corporate world and empathy in technology, she also strives to bridge the gap between girls and technology.",
			twitter: "https://twitter.com/belindaparmar",
			linkedIn: "https://uk.linkedin.com/in/belindaparmar",
			website: "http://theempathybusiness.co.uk/"
		}, {
			avatar: "img/attendees/RobinsonKenS.jpg",
			name: "Sir Ken Robinson",
			occupation: "Author & Expert on Education & Creative<br>Innovation",
			summary: "Sir Ken Robinson is an internationally recognized leader in the development of creative strategy, innovation and human resources. In 2003, he "+
					 "received a knighthood from Queen Elizabeth II for his services to the arts. In 2005, he was named as one of Time/Fortune/CNN’s Principal Voices.",
			twitter: "https://twitter.com/SirKenRobinson",
			linkedIn: "https://www.linkedin.com/in/sirkenrobinson",
			website: ""
		}, {
			avatar: "img/attendees/ShingD.jpg",
			name: "David Shing",
			occupation: "Digital Prophet<br>AOL",
			summary: "Shingy is AOL’s Digital Prophet. He spends most of his time watching the future take shape across the vast online landscape. The rest he spends "+
					 "talking to people about where things are headed and how to get the most out of it.",
			twitter: "https://twitter.com/shingy",
			linkedIn: "https://www.linkedin.com/in/davidshing",
			website: "http://www.shingy.com/"
		}, {
			avatar: "img/attendees/SinekS.jpg",
			name: "Simon Sinek",
			occupation: "Renowned Leadership Expert<br>Simon Sinek Inc.",
			summary: "Simon Sinek is an unshakable optimist. He believes in a bright future and our ability to build it together. Described as a 'visionary thinker "+
					 "with a rare intellect' by some of the World's Leaders. Sinek is leading a movement to inspire people to do the things that inspire them.",
			twitter: "https://twitter.com/simonsinek",
			linkedIn: "https://www.linkedin.com/in/simon-sinek-480b293",
			website: ""
		}, {
			avatar: "img/attendees/VaynerchukG.jpg",
			name: "Gary Vaynerchuk",
			occupation: "CEO & Co-Founder<br>VaynerMedia & VaynerRSE",
			summary: "Gary Vaynerchuk builds businesses. Fresh out of college he took his family wine business and grew it from a $3M to a $60M business in just five years. "+
					 "Now he runs VaynerMedia, one of the world’s hottest digital agencies. Gary is the New York Times best-selling author of Crush It!; The Thank You Economy; Jab, Jab, Jab, Right Hook;",
			twitter: "",
			linkedIn: "",
			website: "http://www.vaynermedia.com/"
		}
	];

	// HTML Attendee Card Template.
	var HTMLattendeeCard = '<li class="attendee-card">'+
								'<div id="attendee-%attendeeID%" class="attendee">'+
									'<img class="attendee-avatar img-responsive" src="%avatar%" alt="%name%">'+
									'<div class="attendee-info">'+
										'<h3 class="attendee-name">%name%</h3>'+
										'<h4 class="attendee-occupation">%occupation%</h4>'+
									'</div>'+
									'<div class="attendee-info-expanded">'+
										'<h3 class="attendee-name">%name%</h3>'+
										'<h4 class="attendee-occupation">%occupation%</h4>'+
										'<p class="attendee-summary">%summary%</p>'+
										'<div class="attendee-links">'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</li>';

	var HTMLattendeeTwitter = '<a href="%twitter%" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>';
	var HTMLattendeeLinkedIn = '<a href="%linkedIn%" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>',
	    HTMLattendeeWebsite =  '<a href="%website%" target="_blank"><i class="fa fa-link" aria-hidden="true"></i></a>';

	// Function to append and display the attendee data on the site.
	function displayAttendees () {
		var id = 0;

		attendees.forEach(function(attendee) {
			var formattedAttendeeCard = HTMLattendeeCard.replace('%attendeeID%', id).replace('%avatar%', attendee.avatar).replace(/%name%/g, attendee.name)
										.replace(/%occupation%/g, attendee.occupation).replace('%summary%', attendee.summary);

			$('#attendees-cards').append(formattedAttendeeCard);

			var attendeeLinks = $('#attendee-' + id + ' .attendee-links');

			if (attendee.twitter) {
				var formattedAttendeeTwitter = HTMLattendeeTwitter.replace('%twitter%', attendee.twitter);

				attendeeLinks.append(formattedAttendeeTwitter);
			}

			if (attendee.linkedIn) {
				var formattedAttendeeLinkedIn = HTMLattendeeLinkedIn.replace('%linkedIn%', attendee.linkedIn);

				attendeeLinks.append(formattedAttendeeLinkedIn);
			}

			if (attendee.website) {
				var formattedAttendeeWebsite = HTMLattendeeWebsite.replace('%website%', attendee.website);

				attendeeLinks.append(formattedAttendeeWebsite);
			}

			id++;
		});
	}

	displayAttendees();
});