

							//  Elements etc
// URL
var link = 'https://qahost.togee.io/'

// togee plugin button
var pluginBtn = '.chat_plugin_icon'

// public & private room
var pubRoom = '.card.card1.active'
var priRoom = '.card.card2'

// Next button - Room type
var roomTypeContainer = '.togee_room_type_container'
var nextBtn = '.footer_next_btn'

// Create room button
var createRoomBtn = '.cw_footer_create_btn'

// Cancel button
var cancelBtn = '.cw_footer_cancel_btn'

var hostNames = ['John','Monica','Sara','Peter','George','Hania','Asma','Naseem','Qasim']

	describe ('Host_Creates Rooms', function(){
	it('Creates public room', function() {

		cy.visit(link, statusCodeFalse)
		cy.get(pluginBtn).should('be.visible')
		cy.get(pluginBtn).click()
		cy.get(roomTypeContainer).should('be.visible')
		cy.get(pubRoom).find('.image_container').click()
		cy.get(nextBtn).should('be.visible')
		cy.get(nextBtn).click()
		cy.get('.input_container').find('input').type(hostNames[ Math.floor(Math.random()* hostNames.length)])
		cy.get(createRoomBtn).should('be.visible')
		cy.get(createRoomBtn).click()
		// expect(true).to.equal(true)
		// cy.go('back') OR cy.go(-1)
		// cy.wait(200)
		// cy.go('forward') OR cy.go(1)
	})

	it('Creates private room', function() {

		cy.visit(link)
		cy.get(pluginBtn).should('be.visible')
		cy.get(pluginBtn).click()
		cy.get(roomTypeContainer).should('be.visible')
		cy.get(priRoom).find('.image_container').click()
		cy.get(nextBtn).should('be.visible')
		cy.get(nextBtn).click()
		cy.get('.input_container').find('input').type(hostNames[ Math.floor(Math.random()* hostNames.length)])
		cy.get(createRoomBtn).should('be.visible')
		cy.get(createRoomBtn).click()
		
	})

})
//hello