1.
Słowo kluczowe this w języku JS odnosi się do bieżącego kontekstu wykonania, czyli obiektu, w którym aktualnie jest wykonywana dana funkcja. 
„this” może mieć różne znaczenia zależne od kontekstu, w którym jest używane.
W programowaniu obiektowym, this jest szczególnie użyteczne do odwoływania się do własności i metod obiektu wewnątrz jego metod. 
Dzięki temu możliwe jest tworzenie bardziej elastycznych i dynamicznych obiektów, które mogą działać na swoich własnych danych i modyfikować swoje zachowanie w zależności od kontekstu wykonania.
2.
W kontekście metod obiektu this odnosi się do samego obiektu, do którego należy metoda. Pozwala to na dostęp do właściwości i metod tego obiektu wewnątrz metody.
W kontekście funkcji: W kontekście funkcji this zazwyczaj odnosi się do obiektu, który wywołuje tę funkcję. 
Jednakże zachowanie this w funkcji jest zależne od tego, jak funkcja została wywołana. 
Może to prowadzić do różnych wartości this, takich jak obiekt globalny, obiekt, na którym została wywołana metoda lub obiekt, który został przekazany do funkcji jako kontekst (call, apply, bind).
W kontekście globalnym: W kontekście globalnym this odnosi się do obiektu globalnego, który w przeglądarkach internetowych jest obiektem window. 
Oznacza to, że odwołując się do this w globalnym kontekście, odnosimy się do obiektu window.
W konstruktorach: W kontekście konstruktora this odnosi się do nowo utworzonego obiektu, który jest tworzony przy użyciu konstruktora. 
this jest używane w celu odniesienia się do właściwości i metod, które należą do nowo utworzonego obiektu.
W metodach call(), apply(), bind(): Metody te pozwalają na jawną zmianę kontekstu this w funkcji. Metoda call() pozwala na wywołanie funkcji z określonym obiektem jako kontekstem this. Metoda apply() działa podobnie do call(), ale pozwala na przekazanie argumentów do funkcji jako tablicy. Metoda bind() tworzy nową funkcję, która ma ustawiony określony kontekst this, ale nie wywołuje jej natychmiast.
