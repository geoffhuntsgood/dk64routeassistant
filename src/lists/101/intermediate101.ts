import { Step } from "../../classes/Step";
import { Color, Tag } from "../../enums";
import { krool } from "../krool";

export const intermediate101: Step[] = [
  {
    color: Color.Header,
    text: "PRE-START",
    isHeader: true
  },
  {
    color: Color.Header,
    text: "Story Skip on, delete File 1"
  },
  {
    color: Color.Header,
    text: "START!",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Complete training barrels"
  },
  {
    color: Color.Header,
    text: "TRAINING GROUNDS DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Get camera/shockwave from BFI"
  },
  {
    color: Color.DK,
    text: "Tag W5, 3 crystals"
  },
  {
    color: Color.DK,
    text: "Caves RC, Caves Early"
  },
  {
    color: Color.DK,
    text: "ENTER/EXIT Caves"
  },
  {
    color: Color.DK,
    text: "Ledge clip for lava GB",
    gbCount: 1,
  },
  {
    color: Color.DK,
    text: "Aztec roof RC, tag W2"
  },
  {
    color: Color.DK,
    text: "Kick to Japes Lobby, ENTER Japes"
  },
  {
    color: Color.Header,
    text: "ENTER JAPES 1 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Bush Push to river"
  },
  {
    color: Color.DK,
    text: "Pswim to cage GB",
    gbCount: 2
  },
  {
    color: Color.DK,
    text: "BP, 3 coins, tag W3 (5)"
  },
  {
    color: Color.DK,
    text: "Climb to BC"
  },
  {
    color: Color.DK,
    text: "Buy Coconut & Ammo Belt 1"
  },
  {
    color: Color.DK,
    text: "Climb tree, Snide balloon (20)"
  },
  {
    color: Color.DK,
    text: "Tag W2, Diddy GB (26)",
    gbCount: 3
  },
  {
    color: Color.DK,
    text: "Kick to tree, slope RC (31)"
  },
  {
    color: Color.DK,
    text: "1st switch, W3 (36)"
  },
  {
    color: Color.DK,
    text: "2nd switch, balloon (46)"
  },
  {
    color: Color.DK,
    text: "Climb to 3rd switch, Diddy GB",
    gbCount: 4
  },
  {
    color: Color.DK,
    text: "Tag W4, Cranky balloon (65)"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Buy up to Spring"
  },
  {
    color: Color.Diddy,
    text: "W4, water bunches (10), 3 coins"
  },
  {
    color: Color.Diddy,
    text: "Buy Peanut"
  },
  {
    color: Color.Diddy,
    text: "Pswim to cave, balloon (20)",
    gbCount: 5
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Army Dillo"
  },
  {
    color: Color.Header,
    text: "KEY 1 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "EXIT/RESET"
  },
  {
    color: Color.Header,
    text: "Turn on Story Skip again"
  },
  {
    color: Color.DK,
    text: "Tag W1/W3, turn in Key 1"
  },
  {
    color: Color.DK,
    text: "W1, W2, ENTER Aztec"
  },
  {
    color: Color.Header,
    text: "ENTER AZTEC 1 (Split)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "BP, 3 coins"
  },
  {
    color: Color.DK,
    text: "Oasis RC"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Tag W1, buy Guitar"
  },
  {
    color: Color.Diddy,
    text: "Rocket to BP, balloon (10)"
  },
  {
    color: Color.Diddy,
    text: "Enter Tiny Temple"
  },
  {
    color: Color.Diddy,
    text: "Melt ice, swim to Tiny (35)"
  },
  {
    color: Color.Diddy,
    text: "Pswim to GB, OKONG",
    gbCount: 6
  },
  {
    color: Color.Diddy,
    text: "Pswim out, tag W2 (40)"
  },
  {
    color: Color.Diddy,
    text: "Open door, tag at Cranky (45)"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Buy Slam 2, balloons (20)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Buy up to Monkeyport"
  },
  {
    color: Color.Tiny,
    text: "Tag W3, BP, Tag W2 (10)"
  },
  {
    color: Color.Tiny,
    text: "Buy Feather, enter T&S"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "DDQ"
  },
  {
    color: Color.Header,
    text: "KEY 5 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Banana push to bonus GB",
    gbCount: 7
  },
  {
    color: Color.DK,
    text: "Strong Kong out (40)"
  },
  {
    color: Color.DK,
    text: "Roll clip into 5DT"
  },
  {
    color: Color.DK,
    text: "L, 2 coins, R, GB",
    gbCount: 8
  },
  {
    color: Color.DK,
    text: "Blast course, balloon (54)"
  },
  {
    color: Color.DK,
    text: "Enter Llama Temple"
  },
  {
    color: Color.DK,
    text: "Free Lanky for GB",
    gbCount: 9
  },
  {
    color: Color.DK,
    text: "EXIT/ENTER"
  },
  {
    color: Color.DK,
    text: "W1, climb 2 trees (64)"
  },
  {
    color: Color.DK,
    text: "Llama GB (67), 1 coin",
    gbCount: 10
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "1 coin, Klaptrap GB (15)",
    gbCount: 11
  },
  {
    color: Color.Tiny,
    text: "W2/W3 to tag"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "2 coins max, bunch, single (6)"
  },
  {
    color: Color.Lanky,
    text: "Buy up to Sprint"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "W3, tower GB (51)",
    gbCount: 12
  },
  {
    color: Color.Diddy,
    text: "Rocket to sun, 5DT switch (60)"
  },
  {
    color: Color.Diddy,
    text: "Try Again, vulture GB (65)",
    gbCount: 13
  },
  {
    color: Color.Diddy,
    text: "Feed totem, enter 5DT"
  },
  {
    color: Color.Diddy,
    text: "R, balloon (75), L, GB",
    gbCount: 14
  },
  {
    color: Color.Diddy,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "AZTEC 1 DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Diddy,
    text: "Charge gongs"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Twirl to bonus GB",
    gbCount: 15
  },
  {
    color: Color.Tiny,
    text: "W2, W1, turn in Key 5"
  },
  {
    color: Color.Tiny,
    text: "Port to fairy, fall to Factory"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "ENTER Factory"
  },
  {
    color: Color.Header,
    text: "ENTER FACTORY (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Lanky,
    text: "Tag W2 (5), robot push"
  },
  {
    color: Color.Lanky,
    text: "Open Tiny cage OOB"
  },
  {
    color: Color.Lanky,
    text: "Pipe GB, pipe (30), tag W4",
    gbCount: 16
  },
  {
    color: Color.Lanky,
    text: "Free Chunky GB (35)",
    gbCount: 17
  },
  {
    color: Color.Lanky,
    text: "Avoid coins, buy Trombone (40)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Buy Saxophone"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Cranky then Candy"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Buy Bongos, balloon (10)"
  },
  {
    color: Color.DK,
    text: "Slam blue switch"
  },
  {
    color: Color.DK,
    text: "Box kick to shed GB (25)",
    gbCount: 18
  },
  {
    color: Color.DK,
    text: "Blast w/all bunches (45)"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Dark room RC, GB (15)",
    gbCount: 19
  },
  {
    color: Color.Chunky,
    text: "Tag W1 (20), 1 coin"
  },
  {
    color: Color.Chunky,
    text: "Climb to bonus GB, enter T&S",
    gbCount: 20
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Clear MJ CS, leave T&S"
  },
  {
    color: Color.DK,
    text: "DK Arcade x2, enter T&S",
    gbCount: 21
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Mad Jack"
  },
  {
    color: Color.Header,
    text: "KEY 3 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Tiny,
    text: "Cage GB (5), BP",
    gbCount: 22
  },
  {
    color: Color.Tiny,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Tiny,
    text: "Wheel GB (25)",
    gbCount: 23
  },
  {
    color: Color.Tiny,
    text: "Funky balloon (35), fairy"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Buy Grape, Homing Ammo"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Buy Pineapple, Ammo Belt 2, BP"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Numbers GB (60), fairy",
    gbCount: 24
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Block Tower GB (20)",
    gbCount: 25
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Bonus GB, go to R&D",
    gbCount: 26
  },
  {
    color: Color.Lanky,
    text: "Singles & tag W2 (55)"
  },
  {
    color: Color.Lanky,
    text: "BC ladder push"
  },
  {
    color: Color.Lanky,
    text: "BP, balloon (65)"
  },
  {
    color: Color.Lanky,
    text: "Piano GB: CBCDECA",
    gbCount: 27
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Car race GB (45)",
    gbCount: 28
  },
  {
    color: Color.Tiny,
    text: "EXIT - tag in Lobby"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "ENTER, hatch balloon (30)"
  },
  {
    color: Color.Chunky,
    text: "Tag W1 (35), W2"
  },
  {
    color: Color.Chunky,
    text: "Toy monster GB (55)",
    gbCount: 29
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "R&D GB (50): 3124,4231,1342",
    gbCount: 30
  },
  {
    color: Color.Diddy,
    text: "Fall to switch/bonus GB",
    gbCount: 31
  },
  {
    color: Color.Diddy,
    text: "Slam prod switch, BP (60), W4"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Jump (60), slam prod switch"
  },
  {
    color: Color.Chunky,
    text: "Crusher GB, spin (75)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Balloon, bonus GB (75)",
    gbCount: 33
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Balloon (75)"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Spring to GB (75)",
    gbCount: 34
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "BP, crusher GB (75)",
    gbCount: 35
  },
  {
    color: Color.DK,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "FACTORY DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Bongo GB",
    gbCount: 36
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Punch box"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "BP, fairy"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Drop to Snide Spring GB",
    gbCount: 37
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "BC, fall to Galleon, BP"
  },
  {
    color: Color.Chunky,
    text: "BP, ENTER Galleon"
  },
  {
    color: Color.Header,
    text: "ENTER GALLEON (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "Tag W2/W3 (10), BC"
  },
  {
    color: Color.Chunky,
    text: "Chest GB, fairy (15)",
    gbCount: 38
  },
  {
    color: Color.Chunky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Chunky,
    text: "Cannon GB, balloon (25)",
    gbCount: 39
  },
  {
    color: Color.Chunky,
    text: "Pswim to lighthouse"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Raise water, tag W5"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Lighthouse GB (30)",
    gbCount: 40
  },
  {
    color: Color.DK,
    text: "Balloon outside (40)"
  },
  {
    color: Color.DK,
    text: "Blast (55), Snide tag (BPs?)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Balloon (10), turn in BPs",
    gbCount: 43
  },
  {
    color: Color.Tiny,
    text: "W3, BP (20), enter T&S"
  },
  {
    color: Color.Tiny,
    text: "Pufftoss as Tiny"
  },
  {
    color: Color.Header,
    text: "KEY 4 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Tiny,
    text: "OOB above T&S, cactus tag"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Cactus balloon (10)"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Cactus balloon (35), BP"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Submarine GB",
    gbCount: 44
  },
  {
    color: Color.Tiny,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Tiny,
    text: "Cannon bunches (35)"
  },
  {
    color: Color.Tiny,
    text: "Pswim to tag W2"
  },
  {
    color: Color.Tiny,
    text: "5DS GB (50), fairy",
    gbCount: 45
  },
  {
    color: Color.Tiny,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Tiny,
    text: "W2 noclip to 2DS GB (60)",
    gbCount: 46
  },
  {
    color: Color.Diddy,
    text: "5DS GB, W5, seal balloon (30)",
    gbCount: 47
  },
  {
    color: Color.Diddy,
    text: "Ship switch, BP"
  },
  {
    color: Color.Diddy,
    text: "Lighthouse GB",
    gbCount: 48
  },
  {
    color: Color.Diddy,
    text: "W5 to Mech Fish GB",
    gbCount: 49
  },
  {
    color: Color.Diddy,
    text: "Bunches by Mech Fish (60)"
  },
  {
    color: Color.Diddy,
    text: "Treasure room GB (75)",
    gbCount: 50
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Balloon/bunch (75)"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Treasure room GB (5)",
    gbCount: 51
  },
  {
    color: Color.Lanky,
    text: "Pswim to pearls"
  },
  {
    color: Color.Lanky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Lanky,
    text: "Balloons and path (30)"
  },
  {
    color: Color.Lanky,
    text: "W2 noclip, 2DS GB (40)",
    gbCount: 52
  },
  {
    color: Color.Lanky,
    text: "Box balloon, 5DS GB (65)",
    gbCount: 53
  },
  {
    color: Color.Lanky,
    text: "Enguarde bunch (70)"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Tunnel (50), 5DS GB",
    gbCount: 54
  },
  {
    color: Color.Chunky,
    text: "W5 to Lag Ship (75)",
    gbCount: 55
  },
  {
    color: Color.Chunky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.DK,
    text: "W2 noclip, 5DS GB (60)",
    gbCount: 56
  },
  {
    color: Color.DK,
    text: "Tunnel (75), W4, BP"
  },
  {
    color: Color.DK,
    text: "Get Seal GB",
    gbCount: 57
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Seal Race Skip GB",
    gbCount: 58
  },
  {
    color: Color.Lanky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Lanky,
    text: "BP, pswim to lighthouse"
  },
  {
    color: Color.Lanky,
    text: "Chest pswim (75)",
  },
  {
    color: Color.Lanky,
    text: "Enguarde chest GB",
    gbCount: 59
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Mermaid GB",
    gbCount: 60
  },
  {
    color: Color.Tiny,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "GALLEON DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Tiny,
    text: "Pswim for pipe GB",
    gbCount: 61
  },
  {
    color: Color.Tiny,
    text: "Port to Saxophone GB",
    gbCount: 62
  },
  {
    color: Color.Tiny,
    text: "Helm early"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "10 HOMING, bonus GB",
    gbCount: 63
  },
  {
    color: Color.Chunky,
    text: "Deathwarp"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "10 MORE HOMING, ENTER Helm"
  },
  {
    color: Color.Header,
    text: "ENTER HELM (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Tiny,
    text: "Kickslide up hills"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Switch kick to DK's room"
  },
  {
    color: Color.DK,
    text: "Pull lever in main room"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Rocket through stars"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Punch gates, Chunky's room"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Tiny's room"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Lanky's room"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Diddy's room, BC"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Terminal clip, Key 8"
  },
  {
    color: Color.DK,
    text: "EXIT on fairy picture"
  },
  {
    color: Color.Header,
    text: "HELM DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Damage boost to BP"
  },
  {
    color: Color.DK,
    text: "Deathwarp, leave Lobby"
  },
  {
    color: Color.DK,
    text: "Drop to cage GB",
    gbCount: 64
  },
  {
    color: Color.DK,
    text: "Enter Castle Lobby, BP switch"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "BP, deathwarp"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "ENTER Castle"
  },
  {
    color: Color.Header,
    text: "ENTER CASTLE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Cross plank (5)"
  },
  {
    color: Color.DK,
    text: "Pswim into tree"
  },
  {
    color: Color.DK,
    text: "BP, balloon (15)"
  },
  {
    color: Color.DK,
    text: "Roll clip for fairy, GB (20)",
    gbCount: 65
  },
  {
    color: Color.DK,
    text: "Tag W4, to W2 (40), drop to tag"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "W2, rocket to cloud (5)",
  },
  {
    color: Color.Diddy,
    text: "Bonus GB on tower",
    gbCount: 66
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Tag W5, library clip",
  },
  {
    color: Color.DK,
    text: "1 bunch (45), library GB",
    gbCount: 67
  },
  {
    color: Color.DK,
    text: "Drop to Cranky, Jetpac"
  },
  {
    color: Color.DK,
    text: "Buy Slam 3"
  },
  {
    color: Color.DK,
    text: "Drop behind, enter tunnel (55)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Twirl to bonus GB",
    gbCount: 68
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Singles until (15)"
  },
  {
    color: Color.Chunky,
    text: "BP, enter dungeon"
  },
  {
    color: Color.Chunky,
    text: "2 balloons (35), 2 Diddy gates"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Face puzzle GB",
    gbCount: 69
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "2 balloons (20)"
  },
  {
    color: Color.Lanky,
    text: "Bonus GB, deathwarp",
    gbCount: 70
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "2 bunches, balloon (25)"
  },
  {
    color: Color.Diddy,
    text: "Moontail for GB",
    gbCount: 71
  },
  {
    color: Color.Diddy,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Diddy,
    text: "W5, fall to ballroom"
  },
  {
    color: Color.Diddy,
    text: "Bonus GB, balloon (50)",
    gbCount: 72
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "2 singles (2), car race GB",
    gbCount: 73
  },
  {
    color: Color.Tiny,
    text: "Fairy, Port, balloon (32)"
  },
  {
    color: Color.Tiny,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Tiny,
    text: "Airswim to BP, climb to W5"
  },
  {
    color: Color.Tiny,
    text: "Down to (51), drop"
  },
  {
    color: Color.Tiny,
    text: "Up to trash can (55)"
  },
  {
    color: Color.Tiny,
    text: "Trash GB (60), 10 HOMING",
    gbCount: 74
  },
  {
    color: Color.Tiny,
    text: "Enter KKO as Tiny"
  },
  {
    color: Color.Header,
    text: "KEY 7 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Lanky,
    text: "W4/W5, tower GB",
    gbCount: 75
  },
  {
    color: Color.Lanky,
    text: "Drop to greenhouse GB, BC (50)",
    gbCount: 76
  },
  {
    color: Color.Lanky,
    text: "Drop to BP, drop to crypt (55)"
  },
  {
    color: Color.Lanky,
    text: "Crypt GB, balloon (65)",
    gbCount: 77
  },
  {
    color: Color.Lanky,
    text: "Deathwarp, up to (75)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Funky balloon (70)"
  },
  {
    color: Color.Tiny,
    text: "Crypt GB (75), deathwarp"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "BP, balloon (60)"
  },
  {
    color: Color.Diddy,
    text: "Crypt GB (75)",
    gbCount: 79
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Balloon (75), crypt GB",
    gbCount: 80
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Crypt GB",
    gbCount: 81
  },
  {
    color: Color.Chunky,
    text: "EXIT/ENTER",
  },
  {
    color: Color.Chunky,
    text: "Pswim into tree"
  },
  {
    color: Color.Chunky,
    text: "Balloon (50), bonus GB",
    gbCount: 82
  },
  {
    color: Color.Chunky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Chunky,
    text: "W4 to shed GB",
    gbCount: 83
  },
  {
    color: Color.Chunky,
    text: "Balloon (60), 20 HOMING"
  },
  {
    color: Color.Chunky,
    text: "Down to museum"
  },
  {
    color: Color.Chunky,
    text: "Bunch, balloon (75), GB",
    gbCount: 84
  },
  {
    color: Color.Chunky,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "CASTLE DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "Move Lobby rock"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Bonus GB, leave Lobby",
    gbCount: 85
  },
  {
    color: Color.Lanky,
    text: "Pswim to cage GB",
    gbCount: 86
  },
  {
    color: Color.Lanky,
    text: "Get Sprint, turn in Keys 8 & 3"
  },
  {
    color: Color.Lanky,
    text: "Press switch, cage GB",
    gbCount: 87
  },
  {
    color: Color.Lanky,
    text: "Turn in key 4, W1"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "W2, move rock, drop to tag"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "W2 to Trombone pad",
  },
  {
    color: Color.Lanky,
    text: "ENTER Aztec"
  },
  {
    color: Color.Header,
    text: "ENTER AZTEC 2 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Lanky,
    text: "Vulture GB, up to (19), BC",
    gbCount: 88
  },
  {
    color: Color.Lanky,
    text: "EXIT/ENTER, W1"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Cage clip to bonus GB",
    gbCount: 89
  },
  {
    color: Color.Chunky,
    text: "Stairs by Snide (6)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Beetle Race GB (20)",
    gbCount: 90
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "Enter Llama Temple"
  },
  {
    color: Color.DK,
    text: "Tag W2/W1 (75)"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Fairy, bonus GB",
    gbCount: 91
  },
  {
    color: Color.Lanky,
    text: "START SKEW to balloons (39)"
  },
  {
    color: Color.Lanky,
    text: "Climb stairs (42), W1 (47)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Lava room GB (35)",
    gbCount: 92
  },
  {
    color: Color.Tiny,
    text: "W2, balloon (45), W1"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Matching game GB",
    gbCount: 93
  },
  {
    color: Color.Lanky,
    text: "Skew to BP, W2"
  },
  {
    color: Color.Lanky,
    text: "Leave temple (50) END SKEW"
  },
  {
    color: Color.Lanky,
    text: "Climb 3 trees (65)"
  },
  {
    color: Color.Lanky,
    text: "5DT GB (R, R), balloon (75)",
    gbCount: 94
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Path and 3 trees (65)"
  },
  {
    color: Color.Tiny,
    text: "5DT GB (L, L), fairy",
    gbCount: 95
  },
  {
    color: Color.Tiny,
    text: "2 trees (75), enter T&S"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Dogadon as Chunky"
  },
  {
    color: Color.Header,
    text: "KEY 2 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "5DT GB (26), BP",
    gbCount: 96
  },
  {
    color: Color.Chunky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Chunky,
    text: "Vase Room GB (47), W1 (48)",
    gbCount: 97
  },
  {
    color: Color.Chunky,
    text: "Enter Tiny Temple, bunches (75)"
  },
  {
    color: Color.Chunky,
    text: "Pswim to GB, EXIT",
    gbCount: 98
  },
  {
    color: Color.Header,
    text: "AZTEC 2 DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "Leave Lobby, Triangle GB",
    gbCount: 99
  },
  {
    color: Color.Chunky,
    text: "Caves Lobby, Punch left wall"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "BP"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Guitar GB, ENTER Caves",
    gbCount: 100
  },
  {
    color: Color.Header,
    text: "ENTER CAVES 2 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Diddy,
    text: "Tag W2, Funky (5), Tag W5"
  },
  {
    color: Color.Diddy,
    text: "Rocket to bonus GB (10)",
    gbCount: 101
  },
  {
    color: Color.Diddy,
    text: "Fly to T&S above DK cabin"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Army Dillo 2"
  },
  {
    color: Color.Header,
    text: "KEY 6 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "DK Cabin GB, BC (5)",
    gbCount: 102
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "W2 (10), pswim to GB (18)",
    gbCount: 103
  },
  {
    color: Color.Chunky,
    text: "W2 CS skip (?), Snide (30)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Swim to tag W4 (2)"
  },
  {
    color: Color.Tiny,
    text: "Tag W1/W3 by igloo (5)"
  },
  {
    color: Color.Tiny,
    text: "Tiny 5DI GB, fairy (20)",
    gbCount: 104
  },
  {
    color: Color.Tiny,
    text: "Clip for ice dome GB",
    gbCount: 105
  },
  {
    color: Color.Tiny,
    text: "Port to balloon (35), W4"
  },
  {
    color: Color.Tiny,
    text: "Mini to bonus GB, W3 (45)",
    gbCount: 106
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Lanky 5DI GB (15)",
    gbCount: 107
  },
  {
    color: Color.Lanky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Lanky,
    text: "W2 to cabin GB (30)",
    gbCount: 108
  },
  {
    color: Color.Lanky,
    text: "Waterfall balloon (40)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "BP, balloon (55), 5DC GB (75)",
    gbCount: 109
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "5DC GB (50)",
    gbCount: 110
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "5DC GB (15)",
    gbCount: 111
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Balloon above cabins (20)"
  },
  {
    color: Color.Diddy,
    text: "Upper 5DC GB (35), fairy"
  },
  {
    color: Color.Diddy,
    text: "Lower 5DC GB (43)",
    gbCount: 113
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "W5 for BP (60)"
  },
  {
    color: Color.Lanky,
    text: "Ice Tomato, balloon (70)",
    gbCount: 114
  },
  {
    color: Color.Lanky,
    text: "Beetle Race (75)",
    gbCount: 115
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "BP, W1 to 5DI GB (50)",
    gbCount: 116
  },
  {
    color: Color.DK,
    text: "Blast course (75)",
    gbCount: 117
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "W4 to BP, balloon (65)"
  },
  {
    color: Color.Diddy,
    text: "5DI GB (75)",
    gbCount: 118
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "W3, balloon (60), W3"
  },
  {
    color: Color.Chunky,
    text: "5DI GB (70), BP"
  },
  {
    color: Color.Chunky,
    text: "Clip for ice dome GB (75)",
    gbCount: 120
  },
  {
    color: Color.Chunky,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "CAVES 2 DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "Small island fairy, slam X"
  },
  {
    color: Color.Chunky,
    text: "Cage GB, Rock GB",
    gbCount: 122
  },
  {
    color: Color.Chunky,
    text: "Japes Lobby, move rock"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Trombone GB",
    gbCount: 123
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "ENTER Japes"
  },
  {
    color: Color.Header,
    text: "ENTER JAPES 2 (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "Bush push to Blast (75)",
    gbCount: 124
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Pswim underground"
  },
  {
    color: Color.Chunky,
    text: "BP, GB (20)"
  },
  {
    color: Color.Chunky,
    text: "Deathwarp to rock GB",
    gbCount: 126
  },
  {
    color: Color.Chunky,
    text: "Gun skew, CS rise START SKEW"
  },
  {
    color: Color.Chunky,
    text: "Tag W1/W2"
  },
  {
    color: Color.Chunky,
    text: "Funky bunches (30), cage GB",
    gbCount: 127
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Cage GB",
    gbCount: 128
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Snide bunch (5), cage GB",
    gbCount: 129
  },
  {
    color: Color.Lanky,
    text: "Wall skew to W4, balloon (15)"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Hut skew, balloon (15)"
  },
  {
    color: Color.Tiny,
    text: "W4, cage GB, W3",
    gbCount: 130
  },
  {
    color: Color.Tiny,
    text: "BP, tag W5, log skew (45)"
  },
  {
    color: Color.Tiny,
    text: "Stump GB, enter shell END SKEW",
    gbCount: 131
  },
  {
    color: Color.Tiny,
    text: "Shell GB (67)",
    gbCount: 132
  },
  {
    color: Color.Tiny,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Tiny,
    text: "W1, bonus GB (75) T&S to tag",
    gbCount: 133
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Bonus GB (20)",
    gbCount: 134
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "W2, enter mountain (24)"
  },
  {
    color: Color.Diddy,
    text: "Backflip clip to switch"
  },
  {
    color: Color.Diddy,
    text: "Minecart GB (49)",
    gbCount: 135
  },
  {
    color: Color.Diddy,
    text: "Open Lanky's cave, BP (52)"
  },
  {
    color: Color.Diddy,
    text: "W2 to mountain GB",
    gbCount: 136
  },
  {
    color: Color.Diddy,
    text: "Balloon (75), W5"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "3 trees (45) and bonus GB",
    gbCount: 137
  },
  {
    color: Color.Chunky,
    text: "Shell clip, fairy, balloons (75)"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "BP, bonus GB (42)",
    gbCount: 138
  },
  {
    color: Color.Lanky,
    text: "Painting room GB (65)",
    gbCount: 139
  },
  {
    color: Color.Lanky,
    text: "Balloon (75), fairy, EXIT"
  },
  {
    color: Color.Header,
    text: "JAPES 2 DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Leave Lobby for GB",
    gbCount: 140
  },
  {
    color: Color.DK,
    text: "Enter Forest Lobby"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Right,
    text: "Shoot mushroom"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Shoot mushroom"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Shoot mushroom"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Shoot mushroom"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Shoot mushroom"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Gone for BC, ENTER Forest"
  },
  {
    color: Color.Header,
    text: "ENTER FOREST (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Chunky,
    text: "Tag W2/W4, well GB (10)",
    gbCount: 141
  },
  {
    color: Color.Chunky,
    text: "Punch shed door, Triangle (15)"
  },
  {
    color: Color.Chunky,
    text: "Beat spider, clip to main room"
  },
  {
    color: Color.Chunky,
    text: "OOB to lever GB",
    gbCount: 142
  },
  {
    color: Color.Chunky,
    text: "2 kegs, leave to tag W1"
  },
  {
    color: Color.Chunky,
    text: "Reenter for 3rd keg GB",
    gbCount: 143
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Mini to back room"
  },
  {
    color: Color.Tiny,
    text: "Spider GB (15)",
    gbCount: 144
  },
  {
    color: Color.Tiny,
    text: "EXIT/ENTER, W1"
  },
  {
    color: Color.Tiny,
    text: "Swim to (27), thorns START SKEW"
  },
  {
    color: Color.Tiny,
    text: "Balloon by T&S (37)"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Right,
    text: "Tag W2, save apple (29)",
    gbCount: 145
  },
  {
    color: Color.Chunky,
    text: "Clip through blue wall"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Right,
    text: "BP, (5), enter shed END SKEW"
  },
  {
    color: Color.DK,
    text: "Bonus GB (10), fairy",
    gbCount: 146
  },
  {
    color: Color.DK,
    text: "EXIT/ENTER"
  },
  {
    color: Color.DK,
    text: "Pink tunnel to tag W3 (15)"
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "W3 (6)",
  },
  {
    color: Color.Lanky,
    text: "Pswim to rabbit GB (14)",
    gbCount: 147
  },
  {
    color: Color.Lanky,
    text: "BP"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "W4, rocket to night (20)"
  },
  {
    color: Color.Diddy,
    text: "W4, clockwise to (29)"
  },
  {
    color: Color.Diddy,
    text: "Owl GB (34)",
    gbCount: 148
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "Stump GB (50)",
    gbCount: 149
  },
  {
    color: Color.Tiny,
    text: "Bean, deathwarp"
  },
  {
    color: Color.Tiny,
    text: "W2, 1 mushroom (55), beanstalk GB",
    gbCount: 150
  },
  {
    color: Color.Tiny,
    text: "EXIT for fairy, ENTER, W3 (60)"
  },
  {
    color: Color.Tiny,
    text: "Mushroom to BP (70), drop to tag"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Rocket to bonus GB (44)",
    gbCount: 151
  },
  {
    color: Color.Diddy,
    text: "Tag W5, inside BP, out to Blast (47)"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Blast course (25)",
    gbCount: 152
  },
  {
    color: Color.DK,
    text: "Down ladder, clockwise to (40)"
  },
  {
    color: Color.DK,
    text: "W5 (50) to BC"
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "Face room GB (44)",
    gbCount: 153
  },
  {
    color: Color.Chunky,
    text: "Fall to BP (54), enter mushroom"
  },
  {
    color: Color.Chunky,
    text: "Fall to (75), shoot switch"
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "Shoot switch, bonus GB (75)",
    gbCount: 154
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "Shoot switch, balloon (24)"
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Shoot switch"
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Slam/shoot overlap, cannon GB (65)",
    gbCount: 155
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Right,
    text: "Balloon (34), dark room GB (49)",
    gbCount: 156
  },
  {
    color: Color.Lanky,
    text: "Light room GB (54)",
    gbCount: 157
  },
  {
    color: Color.Lanky,
    text: "EXIT/ENTER"
  },
  {
    color: Color.Lanky,
    text: "W1 (59), attic GB, roof for (75)",
    gbCount: 158
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Pswim to cage GB",
    gbCount: 159
  },
  {
    color: Color.Diddy,
    text: "Attic GB (65) and fairy",
    gbCount: 160
  },
  {
    color: Color.DK,
    tagDirection: Tag.Left,
    text: "Balloon (75), moonkick to Snide's"
  },
  {
    color: Color.Header,
    text: "ENTER SNIDE'S (SPLIT)",
    isHeader: true
  },
  {
    color: Color.DK,
    text: "OH BANANA! x8",
    gbCount: 168
  },
  {
    color: Color.Chunky,
    tagDirection: Tag.Left,
    text: "OH BANANA! x8",
    gbCount: 176
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Left,
    text: "OH BANANA! x5",
    gbCount: 181
  },
  {
    color: Color.Lanky,
    tagDirection: Tag.Left,
    text: "OH BANANA! x8",
    gbCount: 189
  },
  {
    color: Color.Diddy,
    tagDirection: Tag.Left,
    text: "Balloon (75), OH BANANA! x8",
    gbCount: 197
  },
  {
    color: Color.Diddy,
    text: "EXIT"
  },
  {
    color: Color.Header,
    text: "FOREST DONE (SPLIT)",
    isHeader: true
  },
  {
    color: Color.Diddy,
    text: "Rocket to bonus GB",
    gbCount: 198
  },
  {
    color: Color.Diddy,
    text: "Cage GB, drop to W3",
    gbCount: 199
  },
  {
    color: Color.Tiny,
    tagDirection: Tag.Right,
    text: "W5 to fairy cage GB",
    gbCount: 200
  },
  {
    color: Color.Tiny,
    text: "Rare Banana, W5/W3, ENTER K. Rool",
    gbCount: 201
  },
  ...krool
];
