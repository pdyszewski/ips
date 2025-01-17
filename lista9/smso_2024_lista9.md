# SMUO 2024

## lista 9: the Voter model

1.  Niech $\nu$ i $\pi$ będą miarami probabilistycznymi na $\{0,1\}^V$.
    Załóżmy, że dla każdego skończonego $A \subseteq V$,
    $$\lim_{t \to \infty} \mathbf{P}_{\nu} [\eta_t \equiv 1 \mbox{ and $A$}] = 
                \pi(\eta \: : \: \eta\equiv 1 \mbox{ na $A$}).$$ Pokaż,
    że $\pi$ jest miarą stacjonarną.

2.  Niech $\mu$ będzie miarą probabilistyczną na $\{0,1\}^V$,
    $V = \mathbb{Z}^d$. Załóżmy, że dla pewnego $\rho \in [0,1]$,
    $$\lim_{t \to \infty}
            \mathbb{E}_{x_1, \ldots, x_n}[\mu (\eta \: : \: \eta\equiv 1 \mbox{ na } \{X_1(t), \ldots X_n(t) \})]
                =\rho^n$$ dla każdego $n \in \mathbb{N}$ i każdych
    $x_1, \ldots x_n \in \mathbb{Z}^d$. Przypomnijmy, że $\{X_j\}_j$ to
    niezależne spacery losowe zapoczątkowane w $\{x_j\}_j$. Pokaż, że
    $$\mathbf{P}_{\mu}[\eta_t \in \cdot] \Rightarrow \mu_\rho(\cdot).$$

3.  Niech $\mu$ będzie mieszająca na $\{0,1\}^V$, $V = \mathbb{Z}^d$.
    Niech $\rho = \mu( \eta \: : \: \eta(0)=1)$. Połóżmy
    $$W_t(x,\eta) = \sum_{y \in V} p_t(x,y) \eta(y).$$

    -   Pokaż, że $$\lim_{t \to \infty} W_t(x,\eta) = \rho$$ w
        $L_2(\mu)$ dla każdego $x \in V$.

    -   Pokaż, że
        $$\mathbf{P}_\mu[\eta_t \in \cdot] \Rightarrow \mu_\rho(\cdot).$$

4.  Niech $Z = \mathbb{Z}$. Niech dla $\rho\in [0,1]$,
    $$\nu_\rho = \bigotimes_{k \in \mathbb{Z}}((1-\rho)\delta_0 - \rho \delta_1).$$
    Rozważmy the Voter model w którym
    $q(x,y) =\mathbf{1}_{\{|x-y|=1\}}$.

    -   Wykorzystując zasade odbicia znajdź
        $$\lim_{t \to \infty} \sqrt{t} 
                            \mathbf{P}_{\nu_\rho}[\eta_t(1) \neq \eta_t(0)].$$

    -   Znadź $$\lim_{t \to \infty} 
                            \mathrm{Var} \left[\frac 1t 
                            \int_0^t \eta_s(0) \mathrm{d}s \right].$$

5.  Załóżmy, że prawdopodobieństwa przejścia $p_t$ stowarzyszonego
    spaceru są podwójnie stochastyczne, tj. $$\sum_{x \in V}p_t(x,y)=1$$
    dla każdego $y \in V$. Dla $\eta \in \{0,1\}^V$ niech
    $$|\eta| = \sum_{x \in V} \eta(x).$$

    -   Pokaż, że $|\eta_t|$ jest $\mathbf{P}_\eta$ martyngałem dla
        każdego $\eta \in \{0,1\}$ takiego, że $|\eta|<\infty$.

    -   Wywnioskuj, że $\eta_t \equiv 0$ dla dostatecznie dużych $t$,
        $\mathbf{P}_\eta$ prawie wszędzie, dla każdej
        $\eta \in \{0,1\}^V$ takiej, że $|\eta|<\infty$.
