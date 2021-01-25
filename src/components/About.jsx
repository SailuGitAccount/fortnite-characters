import React from 'react';
import { Row, Container } from 'react-bootstrap';
import '../App.css';

export default function About() {
  return (
    <div className="about">
      <Container>
        <Row>
          <h4>About Fortnite Characters</h4>
          <h6>
            In Fortnite, characters can do a great list of things when talked to
            by players which includes giving Quests, being hired, being dueled,
            and selling and upgrading Items. There are two types of Characters,
            Hunters and Vendors. Hunters are most known for giving Quests
            involving eliminating or dealing damage to other players like Bounty
            Quests which are Quests in which players need to eliminate a
            specific player, they can also be dueled for a Weapon and hired to
            eliminate other players. Vendors are most known for selling and
            upgrading Weapons, Healing Items, and Materials which can be
            upgraded by them and purchased when players give them Bars.
          </h6>
        </Row>
      </Container>
    </div>
  );
}
