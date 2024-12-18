# Wykład 8: Układy spinowe {-}

2024-11-21

*Piotr Dyszewski*

## Motywacje {-}

Aby umotywować nasze przyszłe działania przedyskutujemy kilka
przykładów. Od tej pory niech $G =(V, E)$ będzie przeliczalnym grafem
prostym o ograniczonym stopniu. Dokładniej zakładać będziemy, że zbiór
jego wierzchołków $V$ jest skończony bądź przeliczalny oraz, że
$$\sup_{x \in V} \mathrm{deg}(x) <\infty.$$ Rozważmy następujące trzy
procesy na $G$.

:::{.example}
(Voter model). Przypuśćmy, że na $G$ są dwie wzajemnie
zwalczające się frakcje (można myśleć o republikanach i demokratach). Na
każdy wierzchołek jednej frakcji oddziałują (poprzez indoktrynację)
sąsiedzi z frakcji przeciwnej. Na skutek czego niektóre wierzchołki
zmieniają frakcję na przeciwną. Dokładniej każdy $x \in V$ zmienia
frakcję w intensywnością równą
$$c(x) = \# \{ y \in V \: \: x \sim y, \: \mbox{$y$ jest z innej frakcji niż $x$} \}.$$
Jest to równoważne z następującym opisem.

-   Dla każdej pary sąsiednich wierzchołków $x\sim y$ pochodzących z
    różnych frakcji losujemy niezależnie dwie liczby $E_{x\to y}$ oraz
    $E_{y\to x}$ z rozkładu wykładniczego z parametrem jeden.
    $E_{x\to y}$ interpretujemy jako czas, jaki potrzebuje $x$ aby
    przekabacić $y$.

-   W momencie, w którym którykolwiek z wierzchołków przeciągnie sąsiada
    (powiedzmy $y$) na swoją stronę, losujemy nowe wagi dla sąsiadów $y$
    (według nowego układu obu frakcji).

Oczywiście powyższa, naiwna konstrukcja ma sens tylko, gdy graf $G$ jest
skończony. W przypadku grafów nieskończonych wymagana jest odpowiednia
konstrukcja, którą opiszemy niebawem.
:::

::: {.example}
(Contact process). Załóżmy, że na grafie $G$ panuje
epidemia. Niech $\lambda >0$ będzie ustalonym parametrem. Proces rozwija
się według następujących zasad.

-   Chore wierzchołki niezależnie zarażają swoich zdrowych sąsiadów z
    czasem wykładniczym z parametrem $\lambda$.

-   Chore wierzchołki zdrowieją niezależnie z czasem wykładniczym z
    parametrem jeden.

Ponownie powyższy opis ma sens jedynie w przypadku, gdy $G$ jest
skończony. Dla nieskończonych grafów $G$ będziemy posługiwać się
równoważną charakteryzacją

-   Każdy chory wierzchołek zdrowieje z intensywnością $1$

-   Każdy zdrowy wierzchołek $x$ choruje z intensywnością
    $$\lambda \# \{ y\sim x \: : \: y \mbox{ chory}\}.$$
    
  <div id="p5-container-cp1">

  <script src="JAVA/cp1.js"></script></br>
    </div>
:::



::: {.example}
(Exclusion process). Rozważmy zjawisko migracji na grafie
$G$. Załóżmy, że pewne wierzchołki $G$ są zajmowane przez osobników
ustalonego gatunku (przykładowo krowy). Każdy osobnik czeka niezależnie
wykładniczy czas z parametrem jeden, po czym podejmuje próbę
przemieszczenia się.

-   Jeżeli osobnik zajmuje wierzchołek $x \in V$, to losuje wierzchołek
    $y$ z prawdopodobieństwem $p(x,y)$.

-   Jeżeli wierzchołek $y$ nie jest zajęty, to osobnik przechodzi do
    $y$.
:::

W każdym z powyższych przykładów stan układu w chwili $t$ można
zakodować przy pomocy $\eta_t \in \{ 0,1\}^V$. Okazuje się, że wówczas
$\eta = (\eta_t)_{t \in \mathbb{R}_+}$ staje się procesem Fellera. Aby
się o tym dokładnie przekonać musimy przeanalizować generatory
wynikające z przykładów.

## Systemy spinowe {-}

Właściwością, która odróżnia systemy spinowe od innych procesów Fellera
na $\{0,1\}^S$, jest to, że poszczególne przejścia obejmują tylko jedną
lokalizację. Niech $c \colon V \times \{0,1\}^V \to \mathbb{R}_+$ będzie
ograniczoną funkcją taką, że dla każdego $x \in V$,
$c(x, \cdot) \colon \{0,1\}^V \to \mathbb{R}_+$ jest ciągła. $c(x,\eta)$
interpretować będziemy jako intensywność, z jaką stan $\eta$ zmienia się
poprzez zmianę wartości w $x$. Dla $x \in V$ oraz $\eta \in \{0,1\}^V$
definiujemy $\eta^{(x)} \in \{0,1\}^V$ wzorem $$\eta^{(x)}(y) = \left\{ 
    \begin{array}{cc} \eta(y), & y \neq x \\ 1-\eta(x), & y=x \end{array}\right..$$
Dla $f$ pochodzącego z odpowiedniego podzbioru $C_0(\{0,1\}^V)$ chcemy
położyć 
\begin{equation}
    Lf(\eta) = \sum_{x\in V} c(x, \eta)\left[f\left(\eta^{(x)}\right) - f(\eta)\right]. 
(\#eq:4-defL)
\end{equation}
Okazuje się, że dokładne napisanie dziedziny jest problematyczne. Aby
obejść tę trudność rozważmy 
\begin{equation}
    D = \left\{ f \in C(\{0,1\}^V) : \|f\|_o := \sup_{\eta} \sum_x \left|f\left(\eta^{(x)}\right) - f(\eta)\right| < \infty \right\}. 
(\#eq:4-defD)
\end{equation}

Naszym celem jest pokazanie, że zdefiniowanie $L$ na $D$ wystarcza do
zdefiniowania procesu.

## Dygresja analityczna {-}

Generator infinitezymalny nie należy do najprostszych obiektów w teorii
procesów Fellera. Jednym z powodów jest konieczność uwzględnienia
dzieciny która, jak się już przekonaliśmy, ma istotny wpływ na kształt
generowanego procesu. Rzadko się jednak zdarza, że dziedzinę można
opisać jawnie. Dlatego często definiuje się proponowany generator na
wygodnej podprzestrzeni dziedziny, a następnie bierze się domknięcie.

::: {.definition}
Operator liniowy $(L, \mathcal{D}(L))$ na $C_0(S)$
nazywany jest domkniętym, jeśli jego wykres
$$\Gamma(L)=\{(f, Lf) : f \in D(L)\}$$ jest domkniętym podzbiorem
$C_0(S) \times C_0(S)$.
:::

Operator $L$ jest domknięty wtedy i tylko wtedy, gdy
$f_n \in \mathcal{D}(L)$ są takie, że $f_n \to f$ oraz $Lf_n \to h$, to
$f \in \mathcal{D}(L)$ oraz $h=Lf$.

::: {.definition}
Operator liniowy $(L, \mathcal{D}(L))$ nazywany jest
domykalnym, jeżeli domknięcie jego wykresu $\Gamma(L)$ jest wykresem
operatora liniowego. W takiej sytuacji definiujemy domknięcie
$\overline{L}$ operatora $L$ poprzez
$$\Gamma \left( \overline{L} \right) = \overline{\Gamma(L)}.$$
:::

Operator $L$ jest domykalny wtedy i tylko wtedy, gdy $f_n \to 0$ oraz
$Lf_n \to h$ implikują $h=0$. Nie każdy operator liniowy ma domknięcie.
Na przykład, przypuśćmy, że $S = [0, 1]$ i
$$\mathcal{D}(L) = \{ f \in C(S) : f'(0) \text{ istnieje} \}
        \quad \text{i} \quad Lf(x) = f'(0)x \text{ dla } f \in \mathcal{D}(L).$$
Wtedy domknięcie wykresu $L$ nie jest wykresem operatora liniowego.
Jednakże w kontekście
Definicji \@ref(def:3-12) taka sytuacja nie występuje.

::: {.proposition #3-30}
Niech $(L, \mathcal{D}(L))$ będzie operatorem liniowym na
$C_0(S)$.

-   Przypuśćmy, że $L$ spełnia (GI1)-(GI3) z
    Definicji \@ref(def:3-12). Wtedy $L$ jest domykalny, a jego domknięcie
    spełnia (GI1)-(GI3).

-   Jeśli $L$ spełnia (GI1)- (GI4) z
    Definicji \@ref(def:3-12), wtedy $L$ jest domknięty.

-   Jeśli $L$ spełnia (GI3) i (GI4), to $$\mathcal{R}(I - \lambda L) 
                        = C_0(S) \quad \text{dla każdego } \lambda > 0.$$

-   Jeśli $L$ jest domknięty i spełnia (GI3), to
    $\mathcal{R}(I - \lambda L)$ jest domkniętym podzbiorem $C_0(S)$.
:::

::: {.proof}
Dla pierwszego stwierdzenia, musimy udowodnić, że
$f_n \in \mathcal{D}(L), f_n \to 0$, oraz $Lf_n \to h$ implikuje
$h = 0$. Aby to zrobić, wybierzmy $g \in \mathcal{D}(L)$. Korzystając z
\@ref(eq:3-12),
$$\|(I - \lambda L)(f_n + \lambda g)\|
            \geq \|f_n + \lambda g\|,
            \quad \lambda > 0.$$ Biorąc $n \to \infty$ i następnie
dzieląc przez $\lambda$, dostajemy
$$\|g - h - \lambda Lg\| \geq \|g\|.$$ Jeżeli teraz wybierzemy
$\lambda \to 0$, to otrzymamy $$\| g-h \| \geq \|g\|.$$ Skoro
$g\in \mathcal{D}(L)$ jest wzięte z gęstego zbioru otrzymujemy $h = 0$.
Domknięcie $\overline{L}$ spełnia własności (GI1) i (GI2), ponieważ jest
rozszerzeniem $L$. Aby sprawdzić, czy spełnia własność (GI3),
przypuśćmy, że $f \in \mathcal{D}(\overline{L}), \lambda \geq 0$ i
$f - \lambda \overline{L}f = g$. Przez definicję domknięcia, istnieją
$f_n \in \mathcal{D}(L)$, takie że $f_n \to f$ i
$Lf_n \to \overline{L}f$. Przez własność (GI3) dla $L$,
$$\inf_{x \in S} f_n(x) \geq \inf_{x \in S} g_n(x),$$ gdzie
$g_n = f_n - \lambda Lf_n$. Teraz niech $n \to \infty$. Dostajemy
$$\inf_{x \in S} f(x) \geq \inf_{x \in S} g(x),$$ czyli własność $(GI3)$
dla $\overline{L}$.

Dla dowodu drugiej części faktu, niech $\overline{L}$ będzie domknięciem
$L$. Jeśli $f \in \mathcal{D}(\overline{L})$ i $\lambda > 0$ jest małe,
przez własność (GI4) istnieje $h \in \mathcal{D}(L)$ takie że
\begin{equation}
            h - \lambda Lh = f - \lambda \overline{L}f,(\#eq:3-25)\end{equation} czyli
$(h - f) - \lambda \overline{L}(h - f) = 0$. Z \@ref(eq:3-12),
$h = f$, a wtedy $\overline{L}f = Lh$ z \@ref(eq:3-25).
Więc, $\overline{L} = L$ zgodnie z tezą.

Przechodząc do trzeciego stwierdzenia, wystarczy sprawdzić, że dla
$0 < \lambda < \gamma$ warunek $\mathcal{R}(I - \lambda L) = C_0(S)$
implikuje $\mathcal{R}(I - \gamma L) = C_0(S)$. Załóżmy, że
$g \in C_0(S)$, i zdefiniujmy $\Gamma : C(S) \to \mathcal{D}(L)$ przez
$$\gamma \Gamma h 
        = \lambda (I - \lambda L)^{-1} g + (\gamma - \lambda)(I - \lambda L)^{-1} h.$$
Definicja ta jest poprawna, ponieważ założyliśmy
$\mathcal{R}(I - \lambda L) = C_0(S)$. Mamy
$$\gamma \| \Gamma h_1 - \Gamma h_2 \| 
        = (\gamma - \lambda) \| (I - \mathcal{L})^{-1} (h_1 - h_2) \| 
        \leq (\gamma - \lambda) \| h_1 - h_2 \|.$$ Stąd $\Gamma$ jest
odwzorowaniem zwężającym, a więc z Twierdzenia Banacha o punkcie stałym
posiada jedyny punkt stały $f$. Wówczas $f \in \mathcal{D}(L)$ oraz
$$\gamma (I - \lambda \mathcal{L}) f 
        = \lambda g + (\gamma - \lambda) f.$$ Co można przekształcić do
postaci $f - \gamma L f = g$. Czyli $g \in \mathcal{R}(I - \gamma L)$,
co należało uzasadnić.

Aby udowodnić ostatnie stwierdzenie, załóżmy, że
$g_n \in \mathcal{R}(I - \lambda L)$ i $g_n \to g$. Wtedy możemy
zdefiniować $f_n \in \mathcal{D}(L)$ przez 
\begin{equation}
f_n - \lambda L f_n = g_n.$$
(\#eq:3-26)
\end{equation}
Wówczas
$$(f_n - f_m) - \lambda L (f_n - f_m) = g_n - g_m,$$ a zatem
$\| f_n - f_m \| \leq \| g_n - g_m \|$. Ponieważ
$\{g_n\}_{n \in \mathbb{N}}$ jest ciągiem Cauchy'ego, to
$\{f_n\}_{n \in \mathbb{N}}$ również. Niech
$f = \lim_{n \to \infty} f_n$. Ponieważ $f_n \to f$ i $g_n \to g$, to z \@ref(eq:3-26)
wynika, że $\lim_{n \to \infty} L f_n$ również istnieje. Ponieważ $L$
jest domknięte, granicą jest $L f$, a więc $f - \lambda L f = g$, co
oznacza, że $g \in \mathcal{R}(I - \lambda L)$, czego należało
dowieść.
:::

## Konstrukcja systemów spinowych {-}

Naszym pierwszym celem jest znalezienie naturalnych warunków na
$c(x, \eta)$, które gwarantują, że domknięcie $(L,D)$, gdzie $L$ i $D$
są dane odpowiednio
przez \@ref(eq:4-defL)
oraz \@ref(eq:4-defD) jest operatorem infinitezymalnym. Warunki (GI1),
(GI2), (GI3) i (GI5) są łatwe do sprawdzenia i nie wymagają dodatkowych
założeń. Prawdziwym wyzwaniem jest (GI4).

Dla warunku (GI2), używamy twierdzenia Stone'a-Weierstrassa: $D$ jest
algebrą funkcji ciągłych na zbiorze zwartym, która rozdziela punkty.
Istotnie, dla $\eta \neq \zeta$ istnieje $x \in S$ takie, że
$\eta(x) \neq \zeta(x)$. Funkcja $f(\xi) = \xi(x)$ rozdziela $\eta$ i
$\zeta$. Algebra $D$ zawiera funkcje stałe, więc
$\overline{D} = C(\{0,1\}^V)$.

Dla (GI3), załóżmy $f \in D$, $\lambda \geq 0$, oraz
$f - \lambda Lf = g$. Ponieważ $\{0,1\}^V$ jest zbiorem zwartym i $f$
jest ciągła, istnieje takie $\eta$, dla którego $f$ osiąga swoje
minimum. Wtedy $Lf(\eta) \geq 0$, więc $$\min_\zeta f(\zeta) 
        = f(\eta) \geq g(\eta) 
        \geq \min_\zeta g(\zeta).$$

Warunek (GI5) wynika z faktu, że $1 \in D$ oraz $L1 = 0$.

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

::: { .proposition #4-2}
Załóżmy, że spełniony jest jeden z warunków

-   $f \in D$,

-   $f$ jest ciągła i
\begin{equation}
                c(x, \cdot) \equiv 0 
                \text{ dla wszystkich oprócz skończonej liczby } x \in V.(\#eq:4.3)
\end{equation}
                
Wówczas jeśli $f - \lambda Lf = g \in D$, $\lambda > 0$, oraz
$\lambda M < 1 + \lambda \epsilon$, to $$
        \Delta f \leq \left[ (1 + \lambda \epsilon)I - \lambda \Gamma \right]^{-1} \Delta g,(\#eq:4.4)$$
gdzie nierówność zachodzi współrzędna po współrzędnej, a odwrotność jest
zdefiniowana przez nieskończony szereg \begin{equation}
        \left[ (1 + \lambda \epsilon)I - \lambda \Gamma \right]^{-1} \alpha 
        = \frac{1}{1 + \lambda \epsilon} \sum_{k=0}^{\infty} 
        \left( \frac{\lambda}{1 + \lambda \epsilon} \right)^k \Gamma^k \alpha.(\#eq:4.5)\end{equation}
:::

::: proof
Zauważmy, że szereg w \@ref(eq:4.5) jest
zbieżny dla $\alpha \in \ell_1(V)$ na mocy założenia
$\lambda M < 1 + \lambda \epsilon$. Pisząc $f - \lambda Lf = g$ w
punktach $\eta$ oraz $\eta^{(u)}$, odejmując i zauważając że
$(\eta^{(u)})^{(u)} = \eta$, otrzymujemy 
\begin{multline}
        [f(\eta^{(u)}) - f(\eta)][1 + \lambda c(u, \eta) + \lambda c(u, \eta^{(u)})] 
        = [g(\eta^{(u)}) - g(\eta)]\\
        + \lambda \sum_{x:x \neq u} \left\{ c(x, \eta^{(u)}) [f((\eta^{(u)})^{(x)}) 
        - f(\eta^{(u)})] - c(x, \eta)[f(\eta^{(x)}) - f(\eta)] \right\}.
(\#eq:4-6)
\end{multline} Ponieważ wartości $f(\eta^{(u)}) - f(\eta)$, gdy $\eta$
zmienia się a $u$ jest ustalone, tworzą zbiór symetryczny, a ta różnica
jest funkcją ciągłą $\eta$, dla każdego $u$ istnieje takie $\eta$, że
$$f(\eta^{(u)}) - f(\eta) = \sup_{\zeta} |f(\zeta^{(u)}) - f(\zeta)| = \Delta f(u).$$
Stąd, $$f(\zeta^{(u)}) - f(\zeta) \leq f(\eta^{(u)}) - f(\eta)$$ dla
każdej $\zeta$. Stosując to dla $\zeta = \eta^{(x)}$ i przekształcając,
otrzymujemy $$f((\eta^{(u)})^{(x)}) - f(\eta^{(u)}) 
        = f((\eta^{(x)})^{(u)}) - f(\eta^{(u)}) \leq f(\eta^{(x)}) - f(\eta),$$
Używając tej nierówności w \@ref(eq:4-6), 
\begin{multline}
        \Delta f(u)(1 + \lambda \epsilon) \leq 
        \Delta f(u)[1 + \lambda c(u, \eta) + \lambda c(u, \eta^{(u)})] \\
        \leq \Delta g(u) + \lambda \sum_{x:x \neq u} 
        \left[ c(x, \eta^{(u)}) - c(x, \eta) \right] [f(\eta^{(x)}) - f(\eta)]
        \\ \leq \Delta g(u) + \lambda \sum_{x:x \neq u} \gamma(x,u) \Delta f(x).
(\#eq:4.7)
\end{multline} 
Jeśli \@ref(eq:4-3) zachodzi, to tylko skończona liczba wyrazów po
prawej stronie jest niezerowa, więc $\|\Delta_f\|_1 = \|f\|_o <\infty$.
Zastem przy któregokolwiek z założeń faktu, $f \in D$. Dlatego
\@ref(eq:4-7) można
zapisać jako
$$(1 + \lambda \epsilon) \Delta f \leq \Delta g + \lambda \Gamma \Delta f.$$
Iteracja tej nierówności prowadzi to do
$$\Delta f \leq \frac{1}{1 + \lambda \epsilon} 
        \sum_{k=0}^{n} \left( \frac{\lambda}{1 + \lambda \epsilon} \right)^k 
        \Gamma^k \Delta g + \left( \frac{\lambda}{1 + \lambda \epsilon} \right)^{n+1} 
        \Gamma^{n+1} \Delta f.$$ Jeżeli rozważymy teraz $n \to \infty$,
dostaniemy \@ref(eq:4-4).
:::

::: {.theorem #4-3}
Załóżmy, że $M < \infty$. Wtedy $\overline{L}$ jest
generatorem infinitezymalnym półgrupy Fellera
$T=(T(t))_{t \in \mathbb{R}_+}$. Ponadto, 
\begin{equation}
        \Delta T(t)f \leq e^{-t \epsilon} e^{t \Gamma} \Delta f.
(\#eq:4-8)
\end{equation}
W szczególności, jeśli $f \in D$, to $T_tf \in D$ oraz 
\begin{equation}
        \|T(t)f\|_o \leq e^{(M - \epsilon)t} \|f\|.
(\#eq:4.9)
\end{equation}
:::

::: proof
Własności (GI1), (GI2), (GI3) i (GI5) z
Definicji \@ref(defn:3-12) zachodzą dla $(L, D)$ są i są dziedziczone przez
$\overline{L}$ z Faktu \@ref(prp:3-30). Aby sprawdzić warunek (GI4) weźmy wstępujący ciąg
$V_n\subseteq V$ taki, że $\bigcup_nV_n=V$. Niech 
\begin{equation}
        L_n f(\eta) = 
        \sum_{x \in V_n} c(x, \eta) [f(\eta_x) - f(\eta)], 
        \quad f \in C(\{0,1\}^V).
(\#eq:4-10)
\end{equation}
To jest generator dla systemu
spinowego, w którym współrzędne $$(\eta_t(x) : x \notin V_n)$$ są stałe
w czasie. Ponieważ $L_n$ jest ograniczonym generatorem, spełnia
$$\mathcal{R}(I - \lambda L_n) = C(\{0,1\}^V)$$ dla wszystkich
$\lambda > 0$. Dla $g \in D$, możemy zdefiniować $f_n \in C(\{0,1\}^V)$
przez $f_n - \lambda L_n f_n = g$. Ponieważ $L_n$ spełnia \@ref(eq:4.3), jeśli
$\lambda$ jest wystarczająco małe, tak że
$\lambda M < 1 + \lambda \epsilon$, wtedy $f_n \in D$ zgodnie z
Faktem \@ref(prp:4.2). W
związku z tym możemy położyć
$$g_n = f_n - \lambda L f_n \in \mathcal{R}(I - \lambda L).$$ Niech
$K = \sup_{x, \eta} c(x, \eta) <\infty$, wtedy z
Faktu \@ref(prp:4-2)
\begin{multline}
        \|g_n - g\| 
        = \lambda ||(L - L_n) f_n|| 
        \leq \lambda K \sum_{x \notin V_n} \Delta f_n(x)\\
        \leq \lambda K \sum_{x \notin V_n} 
        \left[ (1 + \lambda \epsilon)I - \lambda \Gamma \right]^{-1} \Delta g(x).
(\#eq:4-11)
\end{multline} Ponieważ $\Delta g \in \ell_1(V)$, prawa strona
\@ref(eq:4.11) dąży
do zera, gdy $n \to \infty$, więc $g_n \to g$. Stąd
$g \in \mathcal{R}(I - \lambda L)$, więc wnioskujemy, że
$D \subseteq \mathcal{R}(I - \lambda L)$. Ponieważ $D$ jest gęste w
$C(\{0,1\}^V)$, widzimy, że $\mathcal{R}(I - \lambda L)$ jest również
gęste. Zatem $$\mathcal{R}(I - \lambda \overline{L}) = C(\{0,1\}^V)$$
zgodnie z Faktem \@ref(prp:3-30). To kończy weryfikację, że $\overline{L}$ jest
generatorem infinitezymalnym.

Przechodząc do drugiego stwierdzenia, zapiszmy
\@ref(eq:4-4) jako
$$\Delta_{(I - \lambda L)^{-1}} g 
        \leq \left[ (1 + \lambda \epsilon)I - \lambda \Gamma \right]^{-1} \Delta g,$$
a następnie iterujmy, aby uzyskać
$$\Delta_{(I - \frac{t}{n} L)^{-1}} g \leq 
        \left[ \left( 1 + \frac{t}{n} \epsilon \right) I - \frac{t}{n} \Gamma \right]^{-n} 
        \Delta g.$$ Przechodząc do granicy otrzymujemy
\@ref(eq:4-8).
:::
