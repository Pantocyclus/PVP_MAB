# PVP_MAB

`PVP_MAB` is a [Multi-Armed Bandit](https://en.wikipedia.org/wiki/Multi-armed_bandit) PVP Script that seeks to automatically figure out which is your strongest minigame in a given PVP season, and does so (figuring out the strongest minigame) as fast as possible.

The default implementation is the Bernoulli Thompson multi-armed bandit strategy which associates with each mini a [beta distribution](https://en.wikipedia.org/wiki/Beta_distribution). It then draws a sample from each mini's distribution, and chooses the mini with the highest sampled value. There are a few other supported bandit strategies, which may be selected by calling the script with the relevant arguments. [This post](https://lilianweng.github.io/posts/2018-01-23-multi-armed-bandit/) covers certain classical bandit strategies and more strategies may be added in the future.

This script has a hardcoded dependency on UberPVPOptimizer, but may otherwise be run out of the box. It should reset the stats every time the season changes (unfortunately, this means that even if a mini is repeated in the future, we do not consider how it has performed historically in the previous PVP seasons), so unless there's a drastic change to the peevpee.php?place=fight page, there's pretty much no upkeep to be done on the base script logic.

## Installation

To install the script, use the following command in the KoLMafia CLI.

```text
git checkout https://github.com/Pantocyclus/PVP_MAB.git release
```

## Running the Script

To run the script, simply type `PVP_MAB` into the CLI. It accepts arguments (loot|fame|flowers) to set the PVP attack type, and (UCB|bernoulliThompson|gaussianThompson|epsilonGreedy) to set the strategy (i.e. `PVP_MAB target=fame strategy=UCB`), and defaults to fame (HC)/loot (otherwise) for attack and bernoulliThompson for strategy.

## Why do I need a Multi-Armed Bandit PVP script?

[Flogger](https://github.com/DamianDominoDavis/kol-flogger) is a good way of keeping track of your PVP stats, which then provides you with the necessary information to determine which is your best mini. However, consider the following scenarios/stats.

Scenario 1<br/>
Mini 1: 667W/333L (66.7% winrate over 1000 fites)<br/>
Mini 2: 333W/667L (33.3% winrate over 1000 fites)<br/>
Mini 3: 500W/500L (50.0% winrate over 1000 fites)<br/>

Scenario 2<br/>
Mini 1: 2W/1L (66.7% winrate over 3 fites)<br/>
Mini 2: 1W/2L (33.3% winrate over 3 fites)<br/>
Mini 3: 500W/500L (50.0% winrate over 1000 fites)<br/>

In Scenario 1, it is pretty clear which mini we should choose - we are confident that Mini 1 has the highest winrate.

However, in Scenario 2 it is pretty much unclear whether Mini 1 is in fact better than Mini 2 and Mini 3. There's just too little information to know for sure. One strategy is to simply pick the Mini that has the highest winrate, with the idea that as we play that Mini more times, it'll eventually converge to its true winrate. This is called the Greedy strategy, which seeks to purely exploit the best (mean) estimates that we have. Unfortunately, it is easy to see how this can fail badly - suppose Mini 1's true winrate was in fact 66.7%, but Mini 2's true winrate is 90% (we were just unlucky losing 2 of our first 3 fights), then Mini 2 will never ever be chosen!

It is clear then, we need to attribute to exploration a certain value. The more certain we are of a given mini's winrate, the less we need to explore that mini. But it is not obvious how we should go about the exploration. Consider this third scenario.

Scenario 3<br/>
Mini 1: 49W/51L (49.0% winrate over 100 fites)<br/>
Mini 2: 1W/99L (1.0% winrate over 100 fites)<br/>
Mini 3: 500W/500L (50.0 winrate over 1000 fites)<br/>

In Scenario 3, we can be pretty confident that Mini 2 will not have a true winrate anywhere close to Mini 3's 50% winrate - i.e. there is almost no value in exploring Mini 2 any further. Intuitively, there is, however, potential value in exploring Mini 1 further. But how much more data do we need? (In fact, did we really need to play out Mini 2 100 times to determine that it was bad? Could we have cut our losses earlier?)

Understanding the statistics is one thing; making optimal decisions based on the stats (to maximize expected rewards/minimize cumulative regret) is another. The various Multi-Armed Bandit strategies seek to solve the latter, by providing a way to translate the stats into decisions that tries to bound the inefficiencies of making decisions under imperfect information/uncertain situations (as compared to an oracle who makes decisions with perfect knowledge).
