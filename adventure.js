// let user = prompt("enter your name")

// alert("Hello!" + user)

// console.log(user);



let firstQ = prompt("You are coming from work and you are tired and want to play video games but you have to complete homework. Which one will you choose? type 'games' or 'hw' ")
firstQ = firstQ.toLowerCase()



if (firstQ === 'games') {
    alert("you will play games")
    let gameQ = prompt("You picked to play video games today! what game do you want to play? type 'resident evil' or 'overwatch' " )
    gameQ = gameQ.toLowerCase()
    if (gameQ === 'resident evil') {
        alert("you decide to play resident evil")
        let sports = prompt("You start playing resident evil when all of a sudden your friends show up asking if you want to go play soccer or basketball with them. type 'soccer' or 'basketball' ")
        sports = sports.toLowerCase()
        if (sports === 'soccer') {
            alert("you decide to go play soccer with your friends")
        } else if (sports === 'basketball') {
            alert("you decide to go play basketball with your friends")
        } else {
            alert("not a valid response 3-1")
        }
    } else if (gameQ === 'overwatch') {
        alert("you decide to play overwatch")
        let gameWithFriends = prompt("You start playing overwatch when all of a sudden you friends show up. Do you tell them to join you and play video games or do you tell them to come back later? type 'play With friends' or 'come back later' ")
        gameWithFriends = gameWithFriends.toLowerCase()
        if (gameWithFriends === 'play with friends') {
            alert("you decide to invite your friends in and play together")
        } else if (gameWithFriends === 'come back later') {
            alert("you decide to tell your friends that you are tired and to come back later")
        } else {
            alert("not a valid response 3-2")
        }
    } else {
        alert("not a valid response 2-1")
    }
}  else if (firstQ === 'hw') {
    alert("you will do your homework")
    
    let homeWorkQ = prompt("You have picked to be responsible today! Which homework will you do first? type 'math hw' or 'science hw' ")
    homeWorkQ = homeWorkQ.toLowerCase()
    if (homeWorkQ === 'math hw') {
        alert("you choose to start with your math homework")
        let food = prompt("You begin your math homework when you realize it is getting late and you are getting hungry. Do you want to cook dinner or order in? type 'cook' or 'order in' ")
        food = food.toLowerCase()
        if (food === 'cook') {
            alert("you decide to cook food")
            let cookFood = prompt("what type of food do you want to cook, burgers or tacos? type 'burgers' or 'tacos' ")
            cookFood = cookFood.toLowerCase()
            if (cookFood === 'burgers') {
                alert(cookFood)
            }else if (cookFood === 'tacos') {
                alert(cookFood)
            } else {
                alert("not a valid response 4-1")
            }
        } else if (food === 'order in') {
            alert("you decide to order food for delivery")
            let orderFood = prompt("what type of food do you want to order, chinese food or spanish food? type 'chinese food' or 'spanish food' ")
            orderFood = orderFood.toLowerCase()
            if (orderFood === 'chinese food'){
                alert(orderFood)
            } else if (orderFood === 'spanish food') {
                alert(orderFood)
            } else {
                alert("not a valid response 4-2")
            }
        } else {
            alert("not a valid response 3-1")
        }
    } else if (homeWorkQ === 'science hw') {
        alert("you decide to start with your science homework")
        let helpWithHomeWork = prompt("You start working on your science homework when you get stuck on a problem. Do you want to ask your friends for help or try to look for the answers online? type 'ask friends' or 'look online' ")
        helpWithHomeWork = helpWithHomeWork.toLowerCase()
        if (helpWithHomeWork === 'ask friends'){
            alert("you decide to ask your friends for help")
        } else if (helpWithHomeWork === 'look online') {
            alert("you decide to look for answers online")
        } else {
            alert("not a valid response 3-2")
        }
    } else {
        alert("not a valid response 2-2")
    }
} else {
    alert("not a valid response 1")
}


