import React from "react";
import { Button } from 'reactstrap';
import { Progress } from 'reactstrap';

export const PlayInner = props => {
    console.log(props);
    return <p>{props.children}</p>
}

const Play = ({score, setScore, player, games, message, setMessage, isGO, setIsGO, ...rest}) => {
    if(score[0] + score[1] < games) {
        return (
            <div className="play">
                <span className="message">{message}</span>
                <br/>
                <Progress multi>
                <Progress bar animated color="primary" value={score[0]} max={games}>{score[0]}</Progress>
                <Progress bar animated color="danger" value={score[1]} max={games}>{score[1]}</Progress>
                </Progress>
                <br/>
                <br/>
                <Button size="sm" onClick={e => {
                    let random = Math.floor(Math.random() * (5));
                    let winner;
                    switch(random) {
                        case 0:
                            switch(player) {
                                case 0:
                                    winner = 3;
                                    break;
                                case 2:
                                case 3:
                                    winner = 1;
                                    break;
                                case 1:
                                case 4:
                                    winner = 0;
                                    break;
                            }
                            break;
                        case 1:
                            switch(player) {
                                case 1:
                                    winner = 3;
                                    break;
                                case 0:
                                case 4:
                                    winner = 1;
                                    break;
                                case 2:
                                case 3:
                                    winner = 0;
                                    break;
                            }
                            break;
                        case 2:
                            switch(player) {
                                case 2:
                                    winner = 3;
                                    break;
                                case 0:
                                case 4:
                                    winner = 0;
                                    break;
                                case 1:
                                case 2:
                                    winner = 1;
                                    break;
                            }
                            break;
                        case 3:
                            switch(player) {
                                case 3:
                                    winner = 3;
                                    break;
                                case 0:
                                case 2:
                                    winner = 0;
                                    break;
                                case 1:
                                case 4:
                                    winner = 1;
                                    break;
                            }
                            break;
                        case 4:
                            switch(player) {
                                case 4:
                                    winner = 3;
                                    break;
                                case 1:
                                case 3:
                                    winner = 0;
                                    break;
                                case 0:
                                case 2:
                                    winner = 1;
                                    break;
                            }
                            break;
                    }
                    if(winner == 0) {
                        setScore(score = [score[0] + 1, score[1]]);
                        setMessage(message = "You won");
                    }
                    else if(winner == 1) {
                        setScore(score = [score[0], score[1] + 1]);
                        setMessage(message = "The Devil won");
                    }
                    else {
                        setMessage(message = "It's a tie");
                    }
                    }}>Play</Button>
            </div>
        );
    }
    if(score[0] + score[1] > games) {
        setScore(score = [games - score[1], score[1]]);
    }
    setIsGO(isGO = true);
    return(<></>);
    
}

export default Play;