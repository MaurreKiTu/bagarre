import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: "rules-comp",
	standalone: true,
	imports: [CommonModule],
	template: `
  	<div class="p-10">
		<div class="m-4 mb-6">
			<h2 class="text-4xl font-['AmaticSC'] mb-2"> Vue d'ensemble </h2>
			<p>
				La bagarre est un jeu rapide de combat. Le but est de rester en vie ! Si c'est votre première partie, on recommande de jouer d'abord avec les règles de base, puis d'ajouter les personnages lorsque vous avez pris le jeu en main.
			</p>
		</div>
		<div class="m-4">
			<h2 class="text-4xl font-['AmaticSC'] mb-2"> Mise en place </h2>
			<p class="mb-8">Dans ce jeu, l'as vaut 1, le valet vaut 11, la dame 12 et le roi 13. Mélangez un jeu de 52 cartes et distribuez 3 cartes à chaque joueur.se, disposées face visible comme suit : 
				<div class="flex justify-center">
					<img class="p-2" src={{table}} alt="Placement">
				</div>
				<ul class="marker:text-main list-disc">
					<li>Les 2 cartes les plus grandes côte à côte verticalement : ce sont ses <b>points de vie (PV)</b>.</li>
					<li>La carte la plus faible devant les PV, horizontalement : c'est son <b>bouclier</b>.</li>
					<li>Le reste des cartes est mis au centre et forme la <b>pioche</b>. </li>
					<li>La <b>défausse</b> est située à côté de la pioche.</li>
				</ul>
			<p><br />
			La personne qui a la somme de cartes la plus faible commence. Puis chacun.e joue son tour dans l'ordre des aiguilles d'une montre.</p>
		</div>
		<div class="m-4">
			<h2 class="text-4xl font-['AmaticSC'] mb-2">Déroulement d'un tour</h2>
			<p>A votre tour, choisissez une action parmi les 4 ci-dessous, et annoncez-la à voix haute. Révélez ensuite la première carte de la pioche et appliquez cette action.<p>
			<ul>
				<li><b>Je change le bouclier de X</b> : défaussez le bouclier de la personne annoncée et remplacez le par la carte piochée.</li>
				<li><b>Je change mon bouclier</b> : défaussez votre bouclier et remplacez le par la carte piochée.</li>
				<li><b>J'attaque X</b> : La personne annoncée perd autant de vie que la différence entre la carte piochée et son bouclier. Elle met à jour ses PV en défaussant sa ou ses cartes PV perdues et prend dans la défausse la carte correspondant à son nouveau total de PV. Si la carte recherchée n'est pas dans la défausse, elle la prend dans la pioche, et la mélange ensuite. Si le bouclier de la personne attaquée est supérieur à la valeur de l'attaque, l'attaque est sans effet. Le bouclier n'est pas défaussé après une attaque.</li>
				<li><b>Je charge une attaque</b> : mettre la carte tirée face cachée devant soi sans la regarder. La prochaine fois que vous attaquez, révélez la charge qui se cumule à la carte d'attaque piochée. Les deux cartes sont ensuite défaussées. Attention :
				<ul>
					<li>Si vous perdez de la vie en ayant une attaque chargée, vous devez défausser votre charge.</li>
					<li>Vous ne pouvez avoir qu'une seule attaque chargée à la fois.</li>
					<li>Un joueur avec une charge n'est pas obligé d'attaquer, mais s'il attaque, il est obligé d'utiliser sa charge.</li>
				</ul>
			</ul>
			<p>
				Lorsque les PV d'un.e joueur.se tombent à zéro, il/elle est éliminé.e, et la personne qui l'a tué.e joue immédiatement une action supplémentaire. En cas de meurtres multiples dans le même tour, plusieurs actions supplémentaires peuvent être gagnées.<br />
				<b><i>Exemple</i></b> : A mon tour, j'annonce que j'attaque Bob. Je révèle la première carte du paquet : un valet. Bob a un bouclier de 6. J'inflige donc 5 dégâts à Bob. Bob a une carte PV de 7 et une carte PV de 8. Il défausse sa carte PV 7, et la remplace par une carte 2, qu'il va chercher dans la défausse, ou à défaut dans la pioche. Son bouclier n'est pas modifié.
			</p>
		</div>
		<div class="m-4">
			<h2 class="text-4xl font-['AmaticSC'] mb-2">Fin de partie</h2>
			<p>La dernière personne en vie dans la partie gagne.</p>
		</div>
		<div class="m-4">
			<h2 class="text-4xl font-['AmaticSC'] mb-2">Autres règles</h2>
			<p><b>Perte de points de vie</b> : La carte PV la plus faible est toujours perdue en priorité.</p>
			<p><img src="img/clairvoyance.png" class="float-start img-icon p-1 m-1" alt="Clairvoyance"><b>Clairvoyance</b> : Tant que vous avez exactement 1 point de vie, vous êtes clairvoyant.e : lors de votre tour, vous pouvez regarder la première carte de la pioche, puis choisir votre action.</p>
			<p><img src="img/dragon.png" class="float-start img-icon p-1 m-1" alt="Réveil du dragon"><b>Réveil du dragon</b> : Lorsque la pile de pioche est épuisée, reformez en une en mélangeant la défausse, puis chaque joueur.se reçoit une attaque venant de la pioche. Chaque fois que la pile est de nouveau terminée, le dragon attaque une fois de plus (2 attaques successives la 2e fois, puis 3, etc.)</p>
		</div>
		<div class="m-4">
			<h4>Personnages de base</h4>
			<p>Au début de la partie, avant de distribuer les cartes, chaque joueur.se choisit un personnage qui lui confère un pouvoir. On recommande une sélection aléatoire, où chaque personnage ne peut être tiré qu'une fois.<br />
			L'application <a href="https://play.google.com/store/apps/details?id=com.komorebi.roulette">Roulette+</a> du Playstore permet de faire ce tirage. Il est aussi possible de jouer en choisissant librement vos persos, et/ou de jouer plusieurs fois le même personnage (sauf pour le.la mage).</p>
			<p class="character" id="item-2-1"><img src="img/warrior.png" class="float-start img-icon p-1 m-1" alt="Guerrier / Guerrière"><b>Guerrier / Guerrière</b> : Vous pouvez utiliser votre action de tour pour charger un bouclier. Pour cela, posez la carte piochée face visible à côté de votre bouclier. La prochaine fois que vous subissez une attaque, si votre bouclier de base ne suffit pas à la bloquer, le bouclier chargé est utilisé pour bloquer en plus, puis défaussé.</p>
			<p class="character" id="item-2-2"><img src="img/necromancer.png" class="float-start img-icon p-1 m-1" alt="Nécromancien / Nécromancienne"><b>Nécromancien / Nécromancienne</b> : Pour réaliser votre action de tour, vous pouvez utiliser la première carte de la pioche (comme pour un tour normal), ou la première carte de la défausse. Vous ne pouvez pas utiliser ce pouvoir pour remettre un bouclier qui vient d'être modifié. <i>(ex. si un.e joueur.se a changé son bouclier qui se retrouve au-dessus de la défausse, vous ne pouvez pas le lui remettre avec votre pouvoir, y compris si le tour d'autres joueur.ses est passé depuis.)</i>.</p>
			<p class="character" id="item-2-3"><img src="img/mage.png" class="float-start img-icon p-1 m-1" alt="Mage"><b>Mage</b> : Chaque fois qu'un As ou un Roi est révélé pour une action ou un pouvoir de personnage, vous pouvez inverser sa valeur (Un As devient Roi, ou un Roi devient As). Récupérez un As ou un Roi dans la défausse ou à défaut dans la pioche, pour remplacer la carte transformée. Remettez cette dernière à l'emplacement où vous avez pris la nouvelle carte (pioche ou défausse).<br />
			<i>Vous ne pouvez transformer une carte qu'au moment où elle apparaît. Vous ne pouvez pas changer les cartes PV des joueur.ses. Vous pouvez changer les cartes jouées de la défausse par le.la nécromancien.ne.</i></p>
			<p class="character" id="item-2-4"><img src="img/thief.png" class="float-start img-icon p-1 m-1" alt="Voleur / Voleuse"><b>Voleur / Voleuse</b> : Chaque fois que vous faites perdre des PV à un.e joueur.se, vous pouvez échanger une de ses cartes contre une des votre. Chaque carte échangée peut être indifféremment une carte PV ou bouclier. Ce pouvoir s'applique après la perte de PV occasionnée par l'attaque. Si l'attaque est fatale, vous pouvez échanger le bouclier de la personne tuée contre une de vos cartes que vous défaussez.</p>
		</div>
		<div class="m-4">
			<h4>Personnages avancés</h4>
			<p class="character" ><img src="img/alchemist.png" class="float-start img-icon p-1 m-1" alt="Alchimiste"><b>Alchimiste</b> : vous disposez de 3 potions à usage unique :
			<ul>
				<li>Potion de feu : A utiliser avant une attaque (chargée ou non), elle permet de choisir 1 cible adjacente supplémentaire.</li>
				<li>Potion d'invisibilité : A utiliser à tout moment, elle permet d'éviter une action indésirable qui vous cible (attaque, changement de bouclier, contre attaque…).</li>
				<li>Potion de vitesse : À utiliser à la fin de votre tour, vous permet de rejouer une action immédiatement. Vous ne pouvez pas utiliser votre potion de feu</li>
			</ul>
			<p class="character" id="item-3-2"><img src="img/bard.png" class="float-start img-icon p-1 m-1" alt="Barde / Bardesse"><b>Barde / Bardesse</b>: Tant que vos cartes PV et bouclier ont la même couleur (rouge / noir), vous pouvez jouer votre action de tour en annoncant votre action puis en choisissant parmi deux cartes piochées ; tant que vos cartes ont le même symbole (♠♥♦♣), vous pouvez choisir parmi trois cartes.<br />
			<i>Si cela a une importance, vous pouvez choisir l'ordre de défausse des autres cartes. Lorsque vous perdez des PV, vous devez toujours prendre votre nouvelle carte PV en priorité dans la défausse. Si vous avez le choix entre plusieurs cartes, vous pouvez choisir.  (ex. Vous devez récupérer un 8. Il n'y a pas de 8 dans la défausse, vous  pouvez choisir le 8 que vous souhaitez dans la pioche.)</i></p>
			<p class="character" id="item-3-3"><img src="img/beast.png" class="float-start img-icon p-1 m-1" alt="Bête"><b>Bête</b> : Chaque fois que vous faites perdre de la vie à un.e joueur.se, mettez un marqueur ‘blessure' devant lui/elle (un jeton, allumette, pièce de monnaie…). Vous recevez un bonus de +2 d'attaque par marqueur blessure sur votre cible. Si une de vos attaques ne fait pas perdre de PV à un.e joueur.se (y compris à cause d'une potion d'invisibilité), toutes ses blessures sont retirées.</p>
			<p class="character" id="item-3-4"><img src="img/hunter.png" class="float-start img-icon p-1 m-1" alt="Chasseur / Chasseresse"><b>Chasseur / Chasseresse</b> : Chaque fois que vous infligez ou recevez des dégâts, prenez un marqueur. Lorsque vous avez 3 marqueurs, défaussez les et piochez une flèche d'or, carte que vous placez face cachée à côté de vous sans la regarder. Quand vous attaquez, vous pouvez choisir d'utiliser une flèche d'or, et infliger directement sa valeur aux PV de votre cible.</p>
			<p class="character" id="item-3-5"><img src="img/spy.png" class="float-start img-icon p-1 m-1" alt="Espion / Espionne"><b>Espion / Espionne</b> : Vous pouvez regarder toutes les cartes cachées en jeu, et garder votre bouclier caché. Lorsque vous recevez une attaque, vous devez révéler votre bouclier à la personne qui vous attaque. Si votre bouclier est échangé, votre nouveau bouclier est de nouveau caché. Au début de la partie, si vous avez le total de cartes le plus faible et que vous souhaitez commencer, vous devez montrer votre bouclier.</p>
			<p class="character" id="item-3-6"><img src="img/ogre.png" class="float-start img-icon p-1 m-1" alt="Ogre / Ogresse"><b>Ogre / Ogresse</b> : Si votre attaque (chargée ou non) est exactement égale au bouclier de votre cible, vous la tuez. Contre un.e guerrier.ère, le bouclier secret est compté.</p>
			<p class="character" id="item-3-7"><img src="img/paladin.png" class="float-start img-icon p-1 m-1" alt="Paladin / Paladine"><b>Paladin / Paladine</b> : Lorsqu'un.e joueur.se vous attaque et vous fait perdre des PV, vous pouvez contre-attaquer immédiatement en tirant deux cartes d'attaque successives de la pioche. Si votre contre-attaque tue un.e joueur.se, vous jouez un tour bonus immédiatement, et l'ordre du tour reprend ensuite où il en était. Si l'attaque vient d'un.e voleur.se, la contre-attaque a lieu avant le vol. La contre attaque s'applique aussi lorsque vous recevez un coup fatal</p>
			<p class="character" id="item-3-8"><img src="img/priest.png" class="float-start img-icon p-1 m-1" alt="Prêtre / Prêtresse"><b>Prêtre / Prêtresse</b> : Choisissez votre voie : <b>Ombre</b> : Vous pouvez utiliser votre action de tour pour échanger une carte PV d'un.e adversaire contre la première carte de la pioche. <b>Lumière</b> : Vous pouvez utiliser votre action de tour pour échanger une de vos cartes PV contre la première carte de la pioche.</p>
			<p class="character" id="item-3-10"><img src="img/peasant.png" class="float-start img-icon p-1 m-1" alt="Paysan / Paysanne"><b>Paysan / Paysanne</b> : Vous n'avez aucun pouvoir, mais défendez votre terre avec honneur.</p>
		</div>
		<div class="m-4">
			<h4>Scénarios</h4>
			<p id="item-4-1"><b>Scénarios en équipe</b><br />
			<i>Classique</i> : Formez autant d'équipes que vous souhaitez (ex. 3V3 ou 2V2V2). Chacun reçoit un personnage aléatoire.<br />
			<i>Guerre des guildes</i> : Les joueur.ses de chaque équipe ont tous.tes le même personnage.<br />
			<i>Pleine lune</i> : 1 équipe de chasseur.esses VS 1 équipe de bêtes. Les blessures des bêtes sont personnelles : elles ne bénéficient qu'à la bête qui a blessé.<br />
			<i>Saroumane</i> : 1 Mage spécial.e (Commence la partie ; 4 cartes PV ; 2 actions / tour ; peut changer 10/ V/D/R en As et As/2/3/4 en Roi) VS 1 guerrier.e, 1 paladin.e, 1 prêtre.sse.<br />
			<i>L'attaque du trône</i> : 1 Paladin.e spécial.e (Commence la partie ; 4 cartes PV ; 2 actions de changement de bouclier gratuites / tour ;  sa contre attaque est une attaque chargée) VS 3 paysan.es<br />
			<i>Le marais</i> :  1 Ogre.sse spécial (Commence la partie ; 6 cartes PV ; 2 actions d' attaque gratuites par tour)  VS 3 paysan.es</p>
			<p id="item-4-2"><b>Scénarios chacun pour soi</b><br />
			<i>Trolls à deux têtes</i> : Chaque joueur.se reçoit 2 personnages<br />
			<i>Full Metal Potions</i> : Que des alchimistes, avec chacun.e 2 lots de potions au départ<br />
			<i>Le village des ogres</i> : Que des ogre.sses (1 carte PV) sauf 1 paysan.ne (2 cartes PV)<br />
			<i>Le grand larcin (4 joueur.ses)</i> : Que des voleur.ses, sauf  1 Guerrier.e spécial.e (Commence la partie ; Cartes de départ : 1 roi en PV, 1 roi en bouclier, 2 rois en boucliers chargés + 1 charge de bouclier classique ; joue 2 actions par tour ; peut charger autant de boucliers qu'il souhaite). Condition de victoire supplémentaire : voler un roi.</p>
		</div>
	</div>
  `
})
export class RulesComponent {
	title = 'RulesComponent';
	table = "../assets/img/table.png";
}
