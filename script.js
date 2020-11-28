$(document).ready(
    function () {
        var selectedWeapon = "";
        var playerWinCount = 0;
        var computerWinCount = 0;
        var gameCount = 0;
        // add event handlers
        $(".weapon img").click(selectWeapon)
        $(".weapon img").click(playGame)
        $("#newGame").click(resetGame)
        // all functions (program logic)
        $("#playerCount").text(playerWinCount)
        $("#compCount").text(computerWinCount)

        function resetGame() {
            $("#roundWin").empty()
            $("#finalOutcome").empty()
            $("#compChoice").empty()
            selectedWeapon = "";
            playerWinCount = 0;
            computerWinCount = 0;
            gameCount = 0;
            $("#playerCount").text(playerWinCount)
            $("#compCount").text(computerWinCount)

        }

        function selectWeapon() {

            //remove previously highlighted
            $("img").removeClass("selected")

            //get id and highlight selected
            selectedWeapon = this.id

            //add class to choice
            $("img#" + selectedWeapon).addClass("selected")
        }

        function playGame() {

            var playerChoice = 0;

            var computerChoice = Math.floor(Math.random() * 5) + 1;

            var computerWeapon = "";

            $("p span, #pdS, #svR, #sdL, #leP, #rcL, #scP, #rcS, #pcR, #lpS, #ssS").removeClass("textSelect")
            $("#roundWin").removeClass("won", "textSelect")

            switch (computerChoice) {
                case 1:
                    computerWeapon = "Rock"
                    break;
                case 2:
                    computerWeapon = "Paper"
                    break;
                case 3:
                    computerWeapon = "Scissors"
                    break;
                case 4:
                    computerWeapon = "lizard"
                    break;
                case 5:
                    computerWeapon = "Spock"
                    break;
            }

            switch (selectedWeapon) {
                case "rock":
                    playerChoice = 1
                    break;
                case "paper":
                    playerChoice = 2
                    break;
                case "scissor":
                    playerChoice = 3
                    break;
                case "lizard":
                    playerChoice = 4
                    break;
                case "spock":
                    playerChoice = 5
                    break;
            }

            while (gameCount < 3) {
                if (computerChoice === 1) {
                    $("#compChoice").text(computerWeapon).addClass("textSelect")
                    if (playerChoice === 2) {
                        playerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#playerCount").text(playerWinCount)
                        $("#pcR").addClass("textSelect")
                        return
                    } else if (playerChoice === 3) {
                        computerWinCount++
                        gameCount++
                        $("#roundWin").text("Computer Wins").addClass("textSelect")
                        $("#compCount").text(computerWinCount)
                        $("#rcS").addClass("textSelect")
                        return
                    } else if (playerChoice === 4) {
                        computerWinCount++
                        gameCount++
                        $("#roundWin").text("Computer Wins").addClass("textSelect")
                        $("#compCount").text(computerWinCount)
                        $("#rcL").addClass("textSelect")
                        return
                    } else if (playerChoice === 5) {
                        playerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#playerCount").text(playerWinCount)
                        $("#svR").addClass("textSelect")
                        return
                    } else $("#roundWin").text("Tie")
                    return

                } else if (computerChoice === 2) {
                    $("#compChoice").text(computerWeapon).addClass("textSelect")
                    if (playerChoice === 1) {
                        computerWinCount++
                        gameCount++
                        $("#roundWin").text("Computer Wins").addClass("textSelect")
                        $("#compCount").text(computerWinCount)
                        $("#pcR").addClass("textSelect")
                        return
                    } else if (playerChoice === 3) {
                        playerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#playerCount").text(playerWinCount)
                        $("#scP").addClass("textSelect")
                        return
                    } else if (playerChoice === 4) {
                        playerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#playerCount").text(playerWinCount)
                        $("#leP").addClass("textSelect")
                        return
                    } else if (playerChoice === 5) {
                        computerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#compCount").text(computerWinCount)
                        $("#pdS").addClass("textSelect")
                        return
                    } else $("#roundWin").text("Tie")
                    return

                } else if (computerChoice === 3) {
                    $("#compChoice").text(computerWeapon).addClass("textSelect")
                    if (playerChoice === 1) {
                        playerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#playerCount").text(playerWinCount)
                        $("#rcS").addClass("textSelect")
                        return
                    } else if (playerChoice === 2) {
                        computerWinCount++
                        gameCount++
                        $("#roundWin").text("Computer Wins").addClass("textSelect")
                        $("#compCount").text(computerWinCount)
                        $("#scP").addClass("textSelect")
                        return
                    } else if (playerChoice === 4) {
                        computerWinCount++
                        gameCount++
                        $("#roundWin").text("Computer Wins").addClass("textSelect")
                        $("#compCount").text(computerWinCount)
                        $("#sdL").addClass("textSelect")
                        return
                    } else if (playerChoice === 5) {
                        playerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#playerCount").text(playerWinCount)
                        $("#ssS").addClass("textSelect")
                        return
                    } else $("#roundWin").text("Tie")
                    return

                } else if (computerChoice === 4) {
                    $("#compChoice").text(computerWeapon).addClass("textSelect")
                    if (playerChoice === 1) {
                        playerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#playerCount").text(playerWinCount)
                        $("#rcL").addClass("textSelect")
                        return
                    } else if (playerChoice === 2) {
                        computerWinCount++
                        gameCount++
                        $("#roundWin").text("Computer Wins").addClass("textSelect")
                        $("#compCount").text(computerWinCount)
                        $("#leP").addClass("textSelect")
                        return
                    } else if (playerChoice === 3) {
                        playerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#playerCount").text(playerWinCount)
                        $("#sdL").addClass("textSelect")
                        return
                    } else if (playerChoice === 5) {
                        computerWinCount++
                        gameCount++
                        $("#roundWin").text("Computer Wins").addClass("textSelect")
                        $("#compCount").text(computerWinCount)
                        $("#lpS").addClass("textSelect")
                        return
                    } else $("#roundWin").text("Tie")
                    return

                } else if (computerChoice === 5) {
                    $("#compChoice").text(computerWeapon).addClass("textSelect")
                    if (playerChoice === 1) {
                        computerWinCount++
                        gameCount++
                        $("#roundWin").text("Computer Wins").addClass("textSelect")
                        $("#compCount").text(computerWinCount)
                        $("#svR").addClass("textSelect")
                        return
                    } else if (playerChoice === 2) {
                        playerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#playerCount").text(playerWinCount)
                        $("#pdS").addClass("textSelect")
                        return
                    } else if (playerChoice === 3) {
                        computerWinCount++
                        gameCount++
                        $("#roundWin").text("Computer Wins").addClass("textSelect")
                        $("#compCount").text(computerWinCount)
                        $("#ssS").addClass("textSelect")
                        return
                    } else if (playerChoice === 4) {
                        playerWinCount++
                        gameCount++
                        $("#roundWin").text("Player Wins").addClass("won")
                        $("#playerCount").text(playerWinCount)
                        $("#lpS").addClass("textSelect")
                        return
                    } else {
                        $("#compChoice").text(computerChoice)
                        $("#roundWin").text("Tie")
                        return
                    }

                }

            } if (playerWinCount > computerWinCount) {
                $("#playerCount").text(playerWinCount)
                $("#roundWin").text("Game Over");
                $("#finalOutcome").text("Player Won this Round!").addClass("won").append("<br><button id='newGame'>New Game</button>")
                $("#newGame").click(resetGame)
            } else {
                $("#compCount").text(computerWinCount)
                $("#roundWin").text("Game Over");
                $("#finalOutcome").text("Computer Won this round").addClass("textSelect").append("<br><button id='newGame'>New Game</button>")
                $("#newGame").click(resetGame)

            }



        }

    }
);