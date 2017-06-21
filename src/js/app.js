$(function() {
	var mobileMenu = $('#mobile-menu'),
		mobileMenuTrigger = $('#mobile-menu-trigger'),
		mobileMainMenu = $('.mobile-main-menu'),
		mobileSubMenu = $('.mobile-submenu');

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

	var attendees = [{
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AverbookJ.jpg',
			name: 'Jason Averbook',
			occupation: 'CEO<br>LeapGen',
			summary: 'Jason Averbook is recognized as one of the top thought leaders in the space of HR, workforce and enterprise technology. As one CEO '+
				     'has said about Jason, He just gets it and can put it into language that we get.',
			twitter: 'https://twitter.com/jasonaverbook',
			linkedIn: 'https://www.linkedin.com/in/jasonaverbook',
			website: 'http://www.jasonaverbook.com/'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}, {
			avatar: 'img/attendees/AlarconG.jpg',
			name: 'Gretchen Alarcon',
			occupation: 'Group VP Product Strategy<br>Oracle',
			summary: 'Gretchen leads the strategy team responsible for Oracle HCM Cloud applications focused on providing new solutions for Modern HR. '+
				     'Oracle HCM was positioned in the leaders section in Gartner’s Magic Quadrant 2015.',
			twitter: 'https://twitter.com/GretchenA',
			linkedIn: 'https://www.linkedin.com/in/gretchenalarcon',
			website: 'https://www.oracle.com/index.html'
		}
	];

	var HTMLattendeeCard = '<li class="attendee-card">'+
								'<div id="attendee-%attendeeID%" class="attendee">'+
									'<img class="img-responsive" src="%avatar%" alt="%name%">'+
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