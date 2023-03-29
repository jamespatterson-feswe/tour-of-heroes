import { Component } from '@angular/core';
import { PlayerService } from '../../services/player/player.service';
import { Player } from '../../models/player.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public player: Observable<Player>;

  constructor(playerService: PlayerService) {
    this.player = playerService.getPlayer();
  }

}
