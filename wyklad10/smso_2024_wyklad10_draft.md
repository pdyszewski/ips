SMUO 2024

wykład 10: Procesy dualne

# Procesy dualne {#procesy-dualne .unnumbered}

Często zdarza się, że wartość oczekiwaną związaną z jednym skomplikowany
procesem jesteśmy w stanie wyrazić jako wartość oczekiwaną związaną z
innym procesem, który jest o wiele poostrzy. Tego typu relacje pozwalają
na przydatne reprezentacje wielkości występujących w procesach Fellera.

::: {#defn:3-41 .defn}
**Definicja 1**. Niech $X_1=(X_1(t))_{t \in \mathbb{R}}$ i
$X_2=(X_2(t))_{t \in \mathbb{R}}$ będą procesami Fellera odpowiednio na
przestrzeniach $S_1$ i $S_2$. Dla mierzalnej i ograniczonej funkcji $H$
na $S_1 \times S_2$, procesy te są nazywane dualnymi względem $H$, jeśli
$$\label{eq:3-30}
            \mathbf{E}_{x_1} [H(X_1(t), x_2)] = \mathbf{E}_{x_2} [H(x_1, X_2(t))]$$
dla każdego $t \geq 0$ oraz $x_i \in S_i$.
:::

Powyższe pojęcie w zupełnej ogólności jest problematyczne. Naturalnym
jest oczekiwać, że [\[eq:3-30\]](#eq:3-30){reference-type="eqref"
reference="eq:3-30"} mówi coś o relacji między $X_1$ oraz $X_2$.
Zauważmy, że każde dwa procesy są dualne względem funkcji stałej.
Jednakże charakter relacji między $X_1$ a $X_2$ zależy bardzo mocno od
konteksty i podyktowany jest prze funkcję $H$.

::: pd
**Przyklad 2**. Niech $X_a$ oraz $X_r$ będą ruchami Browna na
$S_1=S_2=[0, +\infty)$ odpowiednio zabitymi i odbitymi w zerze. Procesy
te są dualne względem funkcji $$H(x,y) = \mathbf{1}_{\{ x \leq y \}}.$$
Wówczas relacja [\[eq:3-30\]](#eq:3-30){reference-type="eqref"
reference="eq:3-30"} zapisuje się jako
$$\mathbf{P}_{x_1}[X_1(t) \leq x_2] = \mathbf{P}_{x_2}[x_1 \leq X_2(t)].$$
W przypadku wspomnianych wersji ruchu Browna
$$\mathbf{P}_{x}[X_a(t) \leq y] = \mathbf{P}_{y}[x \leq X_r(t)].$$ Oba
prawdopodobieństwa są równe
$$\mathbb{P}[B_t\geq x-y]+ \mathbb{P}[B_t\geq x+y],$$ gdzie
$B=(B_t)_{t \in \mathbb{R}_+}$ jest standardowym ruchem Browna na
$\mathbb{R}$. Dokładne sprawdzenie wspomnianej równości pozostawiamy
jako zadanie.
:::

Załóżmy teraz, że $H$ jest ciągła. W świetle definicji procesy Fellera
$X_1$ oraz $X_2$ z półgrupami Fellera odpowiednio
$T_1=(T_1(t))_{t \in \mathbb{R}_+}$ oraz
$T_2=(T_2(t))_{t \in \mathbb{R}_+}$ są $H$-dualne wtedy i tylko wtedy,
gdy $$T_1(t)H(\cdot, s_2)(s_1) = T_2(t)H(s_1, \cdot) (s_2)$$ dla
wszystkich $t \geq 0$, $s_1\in S_1$ oraz $s_2 \in S_2$. W przypadku, gdy
definiujemy procesy Fellera przez ich opis infinitezymalny wygodniejsze
jest kryterium wyrażone w terminach generatorów.

::: {#thm:3.42 .thm}
**Twierdzenie 3**. Niech $X_1$ i $X_2$ będą generowane odpowiednio przez
$(L_1, \mathcal{D}(L_1))$ oraz $(L_2, \mathcal{D}(L_2)$, Załóżmy, że dla
każdych $s_1\in S_1$ oraz $s_2 \in S_2$
$$H(\cdot, s_2) \in \mathcal{D}(L_1) \quad \mbox{oraz} 
            \quad H(s_1, \cdot) \in \mathcal{D}(L_2).$$ Jeżeli dodatkowo
$$L_1 H(\cdot, s_2)(s_1) = L_2 H(s_1, \cdot)(s_2)$$ dla wszystkich
$x_1 \in S_1$ oraz $x_2 \in S_2$. Wówczas $X_1$ i $X_2$ są dualne
względem $H$.
:::

::: proof
*Proof.* Rozumowanie przeprowadzimy jedynie w przypadku przeliczalnej
$S_2$ i ograniczonego $L_2$. Wówczas $X_2$ jest łańcuchem Markowa z
$q$-macierzą $q=(q(x,y))_{x,y\in S_2}$. Przypomnijmy, że wówczas
$$T_2(t)f(s_2)=\mathbf{E}_{s_2}[f(X_2(t)] = \sum_{y \in S_2} \mathbf{P}_{s_2}[X_2(t) =y] f(y).$$
Generator $L_2$ zadany jest wówczas przez
$$L_2 f(s_2) = \left.\frac{\mathrm{d}}{\mathrm{d}t} \right|_{t=0} T_2(t)f(s_2)
            = \sum_{y \in S_2}\left.\frac{\mathrm{d}}{\mathrm{d}t} \right|_{t=0} 
                \mathbf{P}_{s_2}[X_2(t) =y] f(y)
            =\sum_{y \in S_2} q(s_2, y)f(y).$$ Rozważmy
$$\label{eq:3-31}
            u(t, x_1, x_2) = \mathbf{E}_{x_1}H(X_1(t), x_2) = T_1(t) H(\cdot, x_2)(x_1)$$
Na mocy Twierdzenia [\[thm:3:16\]](#thm:3:16){reference-type="ref"
reference="thm:3:16"}, $$\begin{gathered}
            \frac{\mathrm{d}}{\mathrm{d}t} u(t, x_1, x_2) 
            = T_1(t)L_1 H(\cdot, x_2)(x_1) = T_1(t)L_2 H(x_1, \cdot)(x_2) \\
            = \sum_{y\in S_2} q(x_2, y) T_1(t) H(\cdot, y)(x_1) 
            = \sum_y q(x_2, y) u(t, x_1, y)
            = L_2 u(t, x_1, \cdot)(x_2).
        
\end{gathered}$$ Dodatkowo $u(0, x_1, x_2) = H(x_1, x_2)$. Z drugiej
strony funkcja $$v(t,x_1, x_2) = T_2(t)H(x_1, \cdot)(x_2)$$ również
spełnia $v(0,x_1, x_2) = H(x_1, x_2)$. Wystarczy zatem uzasadnić
jedyność tego zagadnienia. Rozważmy w tym celu $h = v-u$. Wówczas
$$h(t,x_1, x_2) = \int_0^t L_2 h(s, x_1, \cdot ) \mathrm{d}s$$ Niech
$$h^*(t,x_1) = \sup_{ s \leq t, x_2 \in S_2} h(s,x_1, x_2).$$ Wówczas
$$h^*(t,x_1) \leq \int_0^t \|L_2\| h^*(s, x_1) \mathrm{d}s.$$ Powyższa
nierówność zwija się do $$\frac{\mathrm{d}}{\mathrm{d}t} 
            \left(e^{- \|L_2\|t} \int_0^t h^*(s, x_1) \mathrm{d}s \right)\leq 0.$$
Co po całkowaniu daje
$$e^{- \|L_2\|t} \int_0^t h^*(s, x_1) \mathrm{d}s\leq 0.$$ Skoro lewa
strona jest niewątpliwie nieujemna, to $h \equiv 0$ za co za tym idzie
$u\equiv v$. Ostatnie równość jest równoważna z dowodzoną tezą. ◻
:::

::: pd
**Przyklad 4**. Niech $X_1$ i $X_2$ będą spacerami losowymi na
$\mathbb{Z}$ z $q$-macierzami odpowiednio
$$q_1(x, x+1) = \beta, \quad q_1(x, x-1) = \delta$$ oraz
$$q_2(x, x+1) = \delta, \quad q_1(x, x-1) = \beta$$
:::

# The Voter model

Niech $V$ będzie przeliczalnym zbiorem z topologia dyskretną. Chcemy
modelować proces rozwoju opinii wśród osobników reprezentowanych przez
elementy $V$. Zakładać będziemy, że w każdej chwili czasu $t \geq 0$
każdy osobnik $x \in V$ reprezentuje jedną z dwóch opinii
$\eta_t(x) \in \{0,1\}$ na zadany temat. Załóżmy, że dane są nieujemne
liczby $q(x, y)$ dla $x \neq y$. Wielkość $q(x,y)$ będzie intensywnością
z jaką $x$ przejmuje opinię $y$ o ile oba osobniki reprezentują różne
opinie. Zakładać będziemy, że
$$M = \sup_{x\in V} \sum_{u : u \neq x} q(x, u) < \infty.$$ Model
głosowania (the Voter model) $\eta_t$ to system spinowy z
$$c(x, \eta) = \sum_{y : \eta(y) \neq \eta(x)} q(x, y).$$ Innymi słowy
jest to proces Fellera generowany przez
$$Lf(\eta) = \sum_{x \in V} c(x, \eta) \left( f\left(\eta^{(x)} \right) - f(\eta) \right).$$
Techniczne szczegóły związane z dziedziną $L$ zostały przedyskutowane w
poprzednim rozdziale. Najważniejsze jest, że z
Twierdzenia [\[thm:4.3\]](#thm:4.3){reference-type="ref"
reference="thm:4.3"} wiemy, że proces ten jest dobrze określony
(domknięcie $L$ jest generatorem infinitezymalnym).

::: pd
**Przyklad 5**. Załóżmy, że $V$ jest wyposażone w strukturę grafu o
ograniczonym stopniu. Chcemy modelować przypadek w którym każdy z
wierzchołków $x \in V$ może wchodzić w interakcję jedynie ze swoimi
bezpośrednimi sąsiadami (i to od nich zapożycza opinie). Rozważmy
$q(x,y) = \mathbf{1}_{x \sim y}$. Wówczas
$$M = \sup_{x \in V} \sum_{u: u \neq x} q(x,u) = \sup_{x\in V} \mathrm{deg}(x) <\infty.$$
:::

Zauważmy, że model głosowania posiada dwa stany stacjonarne
$\eta \equiv 1$ oraz $\eta \equiv 0$. Naszym głównym celem jest
sprawdzenie, czy istnieją inne (nietrywialne) rozkłady stacjonarne.

Aby tego dokonać posłużymy się procesem dualnym do $(\eta_t)_t$. Ustalmy
$t \geq 0$ i $x \in V$. Skoro przy zmianach opinia w $x$ jest
zapożyczana od innych osobników, chcąc zbadać wartość $\eta_t(x)$
rozważmy $t_1$-moment ostatniej zmiany opinii przez $x$, czyli
$$t_1 = \sup_{s \leq t} \{ \eta_{s-}(x) \neq \eta_s(x) \}$$ Jeżeli zbiór
czasów pod kresem górnym jest pusty, to $x$ nie zmienił zdania na
odcinku czasu $[0,t]$, więc $\eta_t(x) = \eta_0(x)$. W chwili $t_1$, $x$
przyjął tę samą opinię co pewien $x_1$ (co się dzieje z intensywnością
$q(x, x_1)$), czyli $\eta_t(x) = \eta_{t_1}(x_1)$. Chcąc ustalić wartość
$\eta_{t_1}(x_1)$ rozważamy ostatni moment, w którym $x_1$ zmienił
opinię $$t_2 = \sup_{s \leq t} \{ \eta_{s-}(x_1) \neq \eta_s(x_1) \}$$
Jeżeli zbiór pod kresem górnym jest pusty, to $x_1$ na przedziale
czasowym $[0,t_1]$ nie zmienił zdania i
$\eta_t(x) = \eta_{t-1}(x_1) = \eta_0(x_1)$. Postępując iteracyjne
dostajemy ciąg czasów $t\geq t_1 > t_2>\ldots >t_N$ taki, że
$$\eta_t(x) =\eta_{t_1}(x_1) = \ldots = \eta_{t_N}(x_N) = \eta_0(x_N).$$
Przy czym przejście z $x_k$ do $x_{k+1}$ dzieje się z intensywnością
$q(x_k, x_{k+1}$. Skonstruowana w ten sposób ścieżka
$(x, x_1, \ldots, x_N)$ ma taki sam rozkład jak ścieżka łańcucha Markowa
$Y_x = (Y_x(t))_{t \in \mathbb{R}_+}$ z $q$-macierzą
$(q(x,y))_{x,y \in V}$. Oznacza to, że
$$\eta_t(x) \stackrel{d}{=} \eta_0(Y_x(t)).$$ Chcąc zbadać teraz rozkład
łączny $(\eta_t(x), \eta_t(y)$ dla $x,y \in V$ możemy wykonać podobną
konstrukcję na podstawie zmian opinii któregokolwiek z elementów pary.
Dostaniemy w ten sposób ciąg czasów
$t \geq s_1> s_2 > \ldots >s_M\geq 0$ taki, że
$$\eta_t(x) =\eta_{s_1}(x_1) = \ldots = \eta_{s_M}(x_M) = \eta_0(x_M).$$
oraz
$$\eta_t(y) =\eta_{s_1}(y_1) = \ldots = \eta_{s_M}(y_M) = \eta_0(y_M).$$
Kluczowa jest następująca własność. Jeżeli $x_j=y_j$ dla pewnego
$j\geq 1$, to $x_k=y_k$ dla wszystkich $k \geq j$. Istotnie, jeżeli $j$
jest najmniejszą taką liczbą, że $x_j=y_j$, to oznacza to że $x_{j-1}$
przejął opinię $x_j$. Po czym zanim $x_j$ zmienił opinię, to $y_{j-1}$
przejął opinię $x_j$. Oznacza to, że
$$(\eta_t(x), \eta_y(y)) \stackrel{d}{=} (\eta_0(Y_x(t)), \eta_0(Y_y(t))),$$
gdzie $Y_x$ i $Y_y$ są łańcuchami Markowa na $V$ z zadaną $q$-macierzą
takimi, że jeżeli w pewnym momencie się spotkają, to od tego momentu
zaczynają się poruszać się razem. Podobny komentarz możemy napisać dla
wektora $\eta_x(t)$ dowolnej długości: jego rozkład będziemy mogli
wyrazić przez kolekcję spacerów losowych na $V$, które się zlewają w
momencie spotkania. Aby wprowadzić ten proces bardziej formalnie,
rozważmy $S_2(N)$ - zbiór wszystkich $A \subseteq V$ o liczebności nie
większej niż $N$. Rozważmy $\{Q(A,B)\}_{A,B \in S_2}$ dane przez
$$Q(A, (A \setminus \{x\}) \cup \{y\}) = q(x, y), \quad x \in A, \, y \notin A;$$
oraz
$$Q(A, A \setminus \{x\}) = \sum_{y \in A, y \neq x} q(x, y), \quad x \in A.$$
Taki wybór instancyjności przejść odpowiada dokładnie zlewającym się
spacerom losowym. Generator takiego procesu jest ograniczony z normą
$$\sum_{B \neq A} Q(A, B) = \sum_{x \in A} \sum_{y \neq x} q(x, y) \leq M N.$$
Pokażemy, że zlewające się spacery losowe $A=(A_t)_{t \in\mathbb{R}}$
(proces o intensywnościach danych powyżej) jest dualny do modelu
głosowania $(\eta_t)_{t \in \mathbb{R}}$ z funkcją
$$H(\eta, A) = \prod_{x \in A} \eta(x) = 1_{\{\eta = 1 \text{ on } A\}},$$
Trajektorie $|A_t|$ są nierosnące, co czyni go bardzo użytecznym w
badaniu modelu głosowania,

::: {#thm:4.32 .thm}
**Twierdzenie 6**. Procesy $(\eta_t)_t$ i $(A_t)_t$ są dualne względem
$H(\eta, A)$.
:::

::: proof
*Proof.* Sprawdzimy, że zachodzą założenia
Twierdzenia [3](#thm:3.42){reference-type="ref" reference="thm:3.42"}.
Niech $L$ będzie generatorem modelu głosowania. Ponieważ $H(\eta, A)$
zależy od $\eta$ tylko poprzez $\{\eta(x), x \in A\}$,
$$\begin{gathered}
        L H(\cdot, A)(\eta) 
        = \sum_{x \in A, y \in S \atop \eta(y) \neq \eta(x)} 
            q(x, y) [H(\eta_x, A) - H(\eta, A)]\\
        = \sum_{x \in A, y \in S \atop \eta(y) \neq \eta(x)} 
            q(x, y) [1 - 2\eta(x)] H(\eta, A \setminus \{x\})\\
        = \sum_{x \in A, y \in S} 
            q(x, y) H(\eta, A \setminus \{x\}) [\eta(y) - \eta(x)]\\
        = \sum_{x \in A, y \in S} 
            q(x, y) [H(\eta, (A \setminus \{x\}) \cup \{y\}) - H(\eta, A)]\\
        = \sum_{B} q(A, B) [H(\eta, B) - H(\eta, A)].
    
\end{gathered}$$ ◻
:::
