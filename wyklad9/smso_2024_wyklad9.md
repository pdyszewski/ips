# wykład 9: Konstrukcja systemów spinowych {-}

Piotr Dyszewski

*28-11-24*

Dla $x \in V$ oraz $\eta \in \{0,1\}^V$ definiujemy
$\eta^{(x)} \in \{0,1\}^V$ wzorem $$\eta^{(x)}(y) = \left\{ 
    \begin{array}{cc} \eta(y), & y \neq x \\ 1-\eta(x), & y=x \end{array}\right..$$
Dla $f$ pochodzącego z odpowiedniego podzbioru $C_0(\{0,1\}^V)$ chcemy
położyć $$\label{eq:4:defL}
    Lf(\eta) = \sum_{x\in V} c(x, \eta)\left[f\left(\eta^{(x)}\right) - f(\eta)\right].$$
Okazuje się, że dokładne napisanie dziedziny jest problematyczne. Aby
obejść tę trudność rozważmy $$\label{eq:4:defD}
    D = \left\{ f \in C(\{0,1\}^V) : \|f\|_o := \sup_{\eta} \sum_x \left|f\left(\eta^{(x)}\right) - f(\eta)\right| < \infty \right\}.$$

## Konstrukcja systemów spinowych cd. {-}

Aby sprawdzić (GI4) musimy wyprowadzić ograniczenie dla rozwiązań
równania $f - \lambda Lf = g$. Niech
$$\epsilon = \inf_{u, \eta} [c(u, \eta) + c(u, \eta_u)] \quad \text{oraz} 
        \quad \gamma(x, u) = \sup_\eta |c(x, \eta_u) - c(x, \eta)|.$$
Zauważmy, że $\gamma(x,u)$ mierzy stopień, w jakim intensywność zmiany w
miejscu $x$ zależy od konfiguracji w miejscu $u$. Niech $\ell_1(V)$
będzie przestrzenią Banacha funkcji $\alpha : V \to \mathbb{R}$, które
spełniają $$||\alpha|| := \sum_x |\alpha(x)| < \infty.$$ Macierz
$\gamma$ definiuje operator $\Gamma$ na $\ell_1(S)$ przez
$$\Gamma \alpha(u) = \sum_{x: x \neq u} \alpha(x) \gamma(x, u).$$
Operator ten jest dobrze zdefiniowany i ograniczony, pod warunkiem że
$$M := \sup_x \sum_{u: u \neq x} \gamma(x, u) < \infty,$$ a wtedy
$||\Gamma|| = M$.

Dla $f \in C(\{0,1\}^V)$ i $x \in S$, niech
$$\Delta f(x) = \sup_{\eta} \left|f\left(\eta^{(x)}\right) - f(\eta)\right|.$$
Wtedy $\|f\|_o = ||\Delta f||_{l_1(V)}$. Oto oszacowanie, którego
potrzebujemy.

::: {#fak:4.2 .prp}
Załóżmy, że spełniony jest jeden z warunków

-   $f \in D$,

-   $f$ jest ciągła i $$\label{eq:4.3}
                c(x, \cdot) \equiv 0 
                \text{ dla wszystkich oprócz skończonej liczby } x \in V.$$

Wówczas jeśli $f - \lambda Lf = g \in D$, $\lambda > 0$, oraz
$\lambda M < 1 + \lambda \epsilon$, to $$\label{eq:4.4}
        \Delta f \leq \left[ (1 + \lambda \epsilon)I - \lambda \Gamma \right]^{-1} \Delta g,$$
gdzie nierówność zachodzi współrzędna po współrzędnej, a odwrotność jest
zdefiniowana przez nieskończony szereg $$
        \left[ (1 + \lambda \epsilon)I - \lambda \Gamma \right]^{-1} \alpha 
        = \frac{1}{1 + \lambda \epsilon} \sum_{k=0}^{\infty} 
        \left( \frac{\lambda}{1 + \lambda \epsilon} \right)^k \Gamma^k \alpha.
(\#eq:4.5)
$$
:::

::: proof
Zauważmy, że szereg w
\@ref(#eq:4.5) jest
zbieżny dla $\alpha \in \ell_1(V)$ na mocy założenia
$\lambda M < 1 + \lambda \epsilon$. Pisząc $f - \lambda Lf = g$ w
punktach $\eta$ oraz $\eta^{(u)}$, odejmując i zauważając że
$(\eta^{(u)})^{(u)} = \eta$, otrzymujemy $$\begin{gathered}
        [f(\eta^{(u)}) - f(\eta)][1 + \lambda c(u, \eta) + \lambda c(u, \eta^{(u)})] 
        = [g(\eta^{(u)}) - g(\eta)]\\
        + \lambda \sum_{x:x \neq u} \left\{ c(x, \eta^{(u)}) [f((\eta^{(u)})^{(x)}) 
        - f(\eta^{(u)})] - c(x, \eta)[f(\eta^{(x)}) - f(\eta)] \right\}.
(\#eq:4.6)
\end{gathered}$$ Ponieważ wartości $f(\eta^{(u)}) - f(\eta)$, gdy $\eta$
zmienia się a $u$ jest ustalone, tworzą zbiór symetryczny, a ta różnica
jest funkcją ciągłą $\eta$, dla każdego $u$ istnieje takie $\eta$, że
$$f(\eta^{(u)}) - f(\eta) = \sup_{\zeta} |f(\zeta^{(u)}) - f(\zeta)| = \Delta f(u).$$
Stąd, $$f(\zeta^{(u)}) - f(\zeta) \leq f(\eta^{(u)}) - f(\eta)$$ dla
każdej $\zeta$. Stosując to dla $\zeta = \eta^{(x)}$ i przekształcając,
otrzymujemy $$f((\eta^{(u)})^{(x)}) - f(\eta^{(u)}) 
        = f((\eta^{(x)})^{(u)}) - f(\eta^{(u)}) \leq f(\eta^{(x)}) - f(\eta),$$
Używając tej nierówności w \@ref(eq:4.6), $$\begin{gathered}
        \Delta f(u)(1 + \lambda \epsilon) \leq 
        \Delta f(u)[1 + \lambda c(u, \eta) + \lambda c(u, \eta^{(u)})] \\
        \leq \Delta g(u) + \lambda \sum_{x:x \neq u} 
        \left[ c(x, \eta^{(u)}) - c(x, \eta) \right] [f(\eta^{(x)}) - f(\eta)]
        \\ \leq \Delta g(u) + \lambda \sum_{x:x \neq u} \gamma(x,u) \Delta f(x).
(\#eq:4.7)    
\end{gathered}$$ Jeśli \@ref(eq:4.3) zachodzi, to tylko skończona liczba wyrazów po
prawej stronie jest niezerowa, więc przy któregokolwiek z założeń faktu
$\Gamma \Delta_f$ jest dobrze określona. Dlatego \@ref(#eq:4.7) można
zapisać jako
$$(1 + \lambda \epsilon) \Delta f \leq \Delta g + \lambda \Gamma \Delta f.$$
Iteracja tej nierówności prowadzi to do
$$\Delta f \leq \frac{1}{1 + \lambda \epsilon} 
        \sum_{k=0}^{n} \left( \frac{\lambda}{1 + \lambda \epsilon} \right)^k 
        \Gamma^k \Delta g + \left( \frac{\lambda}{1 + \lambda \epsilon} \right)^{n+1} 
        \Gamma^{n+1} \Delta f.$$ Jeżeli rozważymy teraz $n \to \infty$,
dostaniemy \@ref(eq:4.4).
:::

::: {#thm:4.3 .thm}
Załóżmy, że $M < \infty$. Wtedy $\overline{L}$ jest
generatorem infinitezymalnym półgrupy Fellera
$T=(T(t))_{t \in \mathbb{R}_+}$. Ponadto, $$
        \Delta T(t)f \leq e^{-t \epsilon} e^{t \Gamma} \Delta f.
(\#eq:4.8)
$$ 
W
szczególności, jeśli $f \in D$, to $T_tf \in D$ oraz $$
        \|T(t)f\|_o \leq e^{(M - \epsilon)t} \|f\|_o.
(\#eq:4.9)
$$
:::

::: proof
Własności (GI1), (GI2), (GI3) i (GI5) z
Definicji \@ref(defn:3:12) zachodzą dla $(L, D)$ są i są dziedziczone przez
$\overline{L}$ z Faktu \@ref(prp:3:30). Aby sprawdzić warunek (GI4) weźmy wstępujący ciąg
$V_n\subseteq V$ taki, że $\bigcup_nV_n=V$. Niech $$
        L_n f(\eta) = 
        \sum_{x \in V_n} c(x, \eta) \left[f\left(\eta^{(x)}\right) - f(\eta)\right], 
        \quad f \in C\left(\{0,1\}^V\right).
(\#eq:4.10)
$$ To jest generator dla
systemu spinowego, w którym współrzędne $$(\eta(x) : x \notin V_n)$$ są
stałe w czasie. Ponieważ $L_n$ jest ograniczonym generatorem, spełnia
$$\mathcal{R}(I - \lambda L_n) = C(\{0,1\}^V)$$ dla dostatecznie małych
$\lambda > 0$. Dla $g \in D$, możemy zdefiniować $f_n \in C(\{0,1\}^V)$
przez $f_n - \lambda L_n f_n = g$. Ponieważ $L_n$ spełnia
\@ref(eq:4.3), jeśli
$\lambda$ jest wystarczająco małe, tak że
$\lambda M < 1 + \lambda \epsilon$, wtedy $f_n \in D$ zgodnie z
Faktem \@ref(prp:4.2). W
związku z tym możemy położyć
$$g_n = f_n - \lambda L f_n \in \mathcal{R}(I - \lambda L).$$ Niech
$K = \sup_{x, \eta} c(x, \eta) <\infty$, wtedy z
Faktu \@ref(prp:4.2),
$$\begin{gathered}
        \|g_n - g\| 
        = \lambda ||(L - L_n) f_n|| 
        \leq \lambda K \sum_{x \notin V_n} \Delta f_n(x)\\
        \leq \lambda K \sum_{x \notin V_n} 
        \left[ (1 + \lambda \epsilon)I - \lambda \Gamma \right]^{-1} \Delta g(x).
    (\#eq:4.11)
\end{gathered}$$ Ponieważ $\Delta g \in \ell_1(V)$, prawa strona
\@ref(eq:4.11) dąży
do zera, gdy $n \to \infty$, więc $g_n \to g$. Stąd
$g \in \mathrm{cl}(\mathcal{R}(I - \lambda L))$, więc wnioskujemy, że
$D \subseteq \mathrm{cl}(\mathcal{R}(I - \lambda L))$. Ponieważ $D$ jest
gęste w $C(\{0,1\}^V)$, widzimy, że $\mathcal{R}(I - \lambda L)$ jest
również gęste. Zgodnie z
Faktem \@ref(prp:3-30), 
$\mathcal{R}(I - \lambda \overline{L})$ musi być
domkniętym podzbiorem $C(\{0,1\}^V)$. Zatem
$$\mathcal{R}(I - \lambda \overline{L}) = C(\{0,1\}^V)$$ To kończy
weryfikację, że $\overline{L}$ jest generatorem infinitezymalnym.

Przechodząc do drugiego stwierdzenia, zapiszmy
\@ref(eq:4.4) jako
$$\Delta_{(I - \lambda L)^{-1}} g 
        \leq \left[ (1 + \lambda \epsilon)I - \lambda \Gamma \right]^{-1} \Delta g,$$
a następnie iterujmy, aby uzyskać
$$\Delta_{(I - \frac{t}{n} L)^{-1}} g \leq 
        \left[ \left( 1 + \frac{t}{n} \epsilon \right) I - \frac{t}{n} \Gamma \right]^{-n} 
        \Delta g.$$ Przechodząc do granicy otrzymujemy \@ref(eq:4.8).
:::
