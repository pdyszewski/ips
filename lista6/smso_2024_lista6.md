## SMUO 2024

### lista 6: Kilka zaginionych faktów

1.  Niech $T = (T_{t})_{t \in \mathbb{R}_+}$ będzie półgrupą Fellera na
    $S$. Pokaż, że dla każdego $x \in S$ i każdego $t \geq 0$ istnieje
    miara $\mu_{t,x}$ na $S$ taka, że
    $$T_tg(x) = \int g(y) \: \mu_{t,x}(\mathrm{d} y).$$
    [Wskazówka]{.smallcaps}: Rozważ jednopunktowe uzwarcenie $S$.

2.  Wywnioskuj z poprzedniego zadania, że $\| T_t\|\leq 1$.

3.  Niech $T = (T_t)_{t \in \mathbb{R}_+}$ będzie półgrupą Fellera.
    Pokaż, że dla każdego $t \geq 0$, $$\inf_{x \in S} T_tf(x) \geq  
                \inf_{x \in S} f(x) .$$

4.  Niech $(\mathbf{P}, \mathbb{F})$ będzie procesem Fellera. Rozważmy
    ograniczoną funkcję mierzalną
    $\varphi \colon \mathbb{R}_+ \times \Omega \to \mathbb{R}$. Pokaż,
    że dla $\mathbb{F}$-czasu zatrzymania $\tau$ zachodzi
    $$\mathbf{E}_x \left[ \varphi(\tau, \theta_{\tau})  | \mathcal{F}_\tau\right] 
                = \Phi(\tau, X_{\tau}) \quad \mathbf{P}_x-p.w.$$ gdzie
    $$\Phi(t,x) = \int_\Omega \varphi(t, \omega) \mathbf{P}_x(\mathrm{d}\omega).$$

5.  Pokaż, że jeżeli $A \colon C_0(S) \to C_0(S)$ jest ograniczonym
    operatorem, to $\mathcal{R}(I-\epsilon A) = C_0(S)$ dla dostatecznie
    małych $\epsilon>0$.

6.  Niech $(L, \mathcal{D}(L))$ będzie generatorem infinitezymalnym. Dla
    $\epsilon>0$ rozważmy $$L_\epsilon = L(I-\epsilon L)^{-1}, \qquad 
                T_\epsilon(t) = \sum_{n=0}^\infty \frac{t^nL_\epsilon^n}{n!}.$$
    Pokaż, że $T_\epsilon$ jest półgrupą Fellera z generatorem
    $L_\epsilon$.
