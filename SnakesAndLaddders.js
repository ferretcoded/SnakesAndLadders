var onlySnakes = false;

    function displayBoard()
    {
        var table = "<table>";
        var counter = 100;
        row = 0;
        colNum = 1;

        for (let i = 0; i < 10; i++)
        {
            table += "<tr>";
                for (let j = 0; j < 10; j++) 
                {
                    if(counter % 2 == 0)
                    {
                        table += "<td id=\""+counter+"\">";
                    }
                    else
                    {
                        table += "<td id=\""+counter+"\">";
                    }
                    // if (counter == playerPosition)
                    // {
                    //     if (turn % 2 == 0)
                    //     {
                    //         table+="<img class=\"imgClass\" src=\"pieceBlue.png\">";
                    //     }
                    //     else
                    //     {
                    //         table+="<img class=\"imgClass\" src=\"pieceGreen.png\">";
                    //     }
                    // }
                    table += "</td>";
                    if (row % 2 == 0)
                    {
                        counter--;
                        colNum++;
                        if (colNum == 11)
                        {
                            counter = counter - 9;
                            row++;
                            colNum = 1;
                        }
                    }
                    else
                    {
                        counter++;
                        colNum++
                        if (colNum == 11)
                        {
                            counter = counter - 11;
                            row++;
                            colNum = 1;
                        }
                    }
                }
            table+="</tr>";
        }
        table+="</table>";
        document.getElementById("boardDisplay").innerHTML = table;

    }

    function rollDice()
    {
        var result = Math.floor(Math.random() * 6)+1;

        document.getElementById("diceVisual").src = "dice"+result+".png";
        movePlayer(result);
    }

    var player1 = 0;
    var player2 = 0;
    var playerPosition = 0;
    sixCount = 0;
    var turn = 1;
    function movePlayer(roll)
    {

        if (turn % 2 == 0)
        {
            if(player2 > 0)
            {
                if (player1 != player2)
                {
                    document.getElementById(player2).innerHTML = ""
                }
                else
                {
                    document.getElementById(player2).innerHTML = "<img class=\"imgClass\" src=\"pieceGreen.png\">"

                }
            }
            player2 = player2 + roll;
            if (player2 > 100)
            {
                player2 = 100 - (player2 - 100);
            }
            playerPosition = player2
            checkSpecialSquare(player2)
            document.getElementById(player2).innerHTML = "<img class=\"imgClass\" src=\"pieceBlue.png\">"
            if (roll != 6)
            {
                turn++
            }
            else
            {
                sixCount++;
            }
            
            if(sixCount == 3)
            {
                sixCount == 0;
                turn++;
            }
            winCon(player2);
        }
        else
        {
            if(player1 > 0)
            {
                if (player2 != player1)
                {
                    document.getElementById(player1).innerHTML = ""
                }
                else
                {
                    document.getElementById(player2).innerHTML = "<img class=\"imgClass\" src=\"pieceBlue.png\">"
                }
            }
            player1 = player1 + roll;
            if (player1 > 100)
            {
                player1 = 100 - (player1 - 100);
            }
            playerPosition = player1
            checkSpecialSquare(player1)
            document.getElementById(player1).innerHTML = "<img class=\"imgClass\" src=\"pieceGreen.png\">"
            if (roll != 6)
            {
                turn++
            }
            else
            {
                sixCount++;
            }
            
            if(sixCount == 4)
            {
                sixCount == 0;
                turn++;
            }
            winCon(player1);
        }


    }

    function checkSpecialSquare(player)
    {
        //LADDERS
        if (onlySnakes == false)
        {
            if(playerPosition == 1)
            {
                playerPosition = 38;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 4)
            {
                playerPosition = 14;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 8)
            {
                playerPosition = 10;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 21)
            {
                playerPosition = 42;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 28)
            {
                playerPosition = 76;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 50)
            {
                playerPosition = 67;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 71)
            {
                playerPosition = 92;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 80)
            {
                playerPosition = 99;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
        }
        //ONLY SNAKES
        else if (onlySnakes == true)
        {
            if(playerPosition == 38)
            {
                playerPosition = 1;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 14)
            {
                playerPosition = 4;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 10)
            {
                playerPosition = 8;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 42)
            {
                playerPosition = 21;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 76)
            {
                playerPosition = 28;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 67)
            {
                playerPosition = 50;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 92)
            {
                playerPosition = 71;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
            else if(playerPosition == 99)
            {
                playerPosition = 80;
                if (player == player1)
                {
                    player1 = playerPosition;
                }
                else
                {
                    player2 = playerPosition
                }
            }
        }
        
        //SNAKES
        if(playerPosition == 32)
        {
            playerPosition = 10;
            if (player == player1)
            {
                player1 = playerPosition;
            }
            else
            {
                player2 = playerPosition
            }
        }
        else if(playerPosition == 36)
        {
            playerPosition = 6;
            if (player == player1)
            {
                player1 = playerPosition;
            }
            else
            {
                player2 = playerPosition
            }
        }
        else if(playerPosition == 48)
        {
            playerPosition = 26;
            if (player == player1)
            {
                player1 = playerPosition;
            }
            else
            {
                player2 = playerPosition
            }
        }
        else if(playerPosition == 63)
        {
            playerPosition = 18;
            if (player == player1)
            {
                player1 = playerPosition;
            }
            else
            {
                player2 = playerPosition
            }
        }
        else if(playerPosition == 88)
        {
            playerPosition = 24;
            if (player == player1)
            {
                player1 = playerPosition;
            }
            else
            {
                player2 = playerPosition
            }
        }
        else if(playerPosition == 95)
        {
            playerPosition = 56;
            if (player == player1)
            {
                player1 = playerPosition;
            }
            else
            {
                player2 = playerPosition
            }
        }
        else if(playerPosition == 97)
        {
            playerPosition = 78;
            if (player == player1)
            {
                player1 = playerPosition;
            }
            else
            {
                player2 = playerPosition
            }
        }
    }

    function winCon(player)
    {
        if (player1 == 100)
        {
            document.getElementById("win").innerHTML = "Player 1 Win!";
            document.getElementById("dice").disabled = true;
        }
        else if (player2 == 100)
        {
            document.getElementById("win").innerHTML = "Player 2 Win!"
            document.getElementById("dice").disabled = true;
        }
    }

    function snakesToggle()
    {
        if(onlySnakes == true)
        {
            onlySnakes = false;
            document.getElementById("snakesOnlyIndicator").innerHTML = "Snakes Only: Off"
        }
        else
        {
            onlySnakes = true;
            document.getElementById("snakesOnlyIndicator").innerHTML = "Snakes Only: On"
        }
    }

    function resetGame()
    {
        if (!!player1)
        {
            document.getElementById(player1).innerHTML = "";
        }
        if (!!player2)
        {
            document.getElementById(player2).innerHTML = "";
        }
        player1 = 0;
        player2 = 0;
        playerPosition = 0;
        sixCount = 0;
        turn = 1;
        document.getElementById("dice").disabled = false;
        document.getElementById("win").innerHTML = "";

    }