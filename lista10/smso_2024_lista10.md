# SMUO 2024

## lista 10: Model epidemii

1.  Niech $V$ będzie zbiorem przeliczalnym. Rozważmy system spinowy z
    generatorem infinitezymalnym postaci $$Lf(\eta) = 
                \sum_{x \in V} 
                c(x, \eta) \left[ f(\left(\eta^{(x)} \right) - f(\eta) \right],$$
    gdzie liczby $c(x, \eta)$ dla $x\in V$ oraz $\eta\in \{0,1\}^V$ są
    takie, że
    $$\epsilon = \inf_{x,\eta}\left[c(x,\eta) +c\left(x, \eta^{(x)}\right) \right], 
                \quad
                \gamma(x,y) = \sup_{\eta} \left|c\left(x,\eta^{(x)}\right) -c(x,\eta) \right|$$
    spełniają
    $$M = \sup_{x \in V} \sum_{y \neq x} \gamma(x,y) <\epsilon.$$

    -   Pokaż, że dla każdych $\eta, \xi \in \{ 0,1\}^V$ i $f \in D$
        (patrzy wykład 9) mamy $|f(\eta) - f(\xi)| \leq \|f\|_o$.
        Wywnioskuj, że
        $|T_tf(\eta) - T_tf(\xi)| \leq e^{(M-\epsilon)t}\|f\|_o$, gdzie
        $(T_t)_{t \in \mathbb{R}_+}$ jest stowarzyszoną półgrupą
        Fellera.

    -   Niech $\pi$ będzie rozkładem stacjonarnym dla rozważanego
        procesu Fellera $(\eta_t)_{t \in \mathbb{R}_+}$. Pokaż, że dla
        każdej ciągłej i rzeczywistej $f$ na $\{0,1\}^V$ i dla każdej
        miary probabilistycznej $\nu$ na $\{0,1\}^V$ mamy
        $$\lim_{t \to \infty} \mathbf{E}_\nu \left[f(\eta_t) \right]
                            = \int f(\eta) \: \pi(\mathrm{d}\eta).$$

2.  Rozważmy model epidemii na grafie $G$. Pokaż, że jeżeli
    $$1/\lambda > \max_{x} \mathrm{deg}(x),$$ to proces ten posiada
    tylko jedną miarę stacjonarną.

3.  Niech $N=(N(t)_{t \in \mathbb{R}_+}$ będzie jednorodnym procesem
    Poissona z parametrem $\lambda>0$. Niech $E$ będzie niezależną od
    $N$ zmienną losową. Pokaż, że $N(t+E)-N(E)$ jest jednorodnym
    procesem Poissona z parametrem $\lambda>0$.

4.  Niech $\{\xi_k\}_{k \in \mathbb{N}}$ będzie ciągiem iid z rozkładem
    wykładniczym z parametrem $\lambda>0$. Niech
    $S_n = \sum_{k=1}^n\xi_k$ i niech
    $$\nu(t) = \inf \{ k \: : \: S_k>t\}.$$ Pokaż, że dla każdego $t>0$
    zmienna $t-S_{\nu(t)-1}$ ma ten sam rozkład co $\xi_1\wedge t$.
