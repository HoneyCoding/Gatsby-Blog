---
title: "TIL 2023-03-29"
description:
date: 2023-03-29
update: 2023-03-29
tags:
  - TIL
  - 2023년 TIL
series: "2023년 03월 TIL"
---

## 2023/03/29

## 데이터 타입 고급
### 데이터 타입 안심 (Type Safety)
Swift는 안전한(Safe) 프로그래밍 언어로, 타입에 대하여 엄격한 프로그래밍 언어이다. C언어, Java와 같은 과거부터 많이 쓰인 프로그래밍 언어의 경우 자동 형변환 등을 통해 변수에 서로 다른 타입의 값을 지정할 수 있었다.
```C
int num = 3.0;
char ch = 97;
double value = 6;
```
그러나 이러한 문법적 허용은 때로는 개발자의 실수로 원치 않는 동작을 코드로 작성하였을 때에도 컴파일러가 잡아낼 수 없었다. 이러한 논리적 에러를 방지하기 위하여 Swift는 타입을 엄격하게 확인하는 언어로 만들어졌다. 예를 들어 Int 타입에 Double 타입의 값을 할당하면 컴파일 타임에 에러가 발생한다.

이처럼 타입에 대해 엄격한 언어를 Type Safety한 프로그래밍 언어라고 한다. Type Safe한 프로그래밍 언어는 Swift 외에도 Kotlin, Rust 등이 있다.

### 타입 추론
Swift 언어는 변수를 선언할 때 변수의 타입을 지정하지 않아도 컴파일러가 변수의 값을 기준으로 변수의 타입을 결정한다. 타입을 적지 않아도 컴파일러가 타입을 지정하는 것을 타입 추론이라고 한다.
``` Swift
var name = "Jintae"
```

### 타입 별칭
Swift 언어는 사용자 정의 타입, 또는 기본 타입에 개발자가 원하는 다른 이름(또는 별칭)을 지정할 수 있다. 예를 들어 Int 타입에 다른 이름 Number를 지정해 사용할 수 있다. 이 때, Int와 Number는 같은 타입으로 취급된다. 이를 타입 별칭이라 한다.

``` Swift
typealias Number = Int // Int 타입에 Number라는 별칭 지정
var firstNumber: Number = 6
var secondNumber: Int = 3
var result = firstNumber + secondNumber // Number와 Int 타입은 같은 타입으로 취급되어 더할 수 있다.
print(result) // 9
```

### 튜플
튜플은 사용자 정의 타입으로 개발자가 원하는 타입을 묶어서 튜플로 지정할 수 있다. 파이썬 프로그래밍 언어의 튜플과 유사하다.
```Swift
// String, Int, Double 타입을 갖는 튜플
var person: (String, Int, Double) = ("jt", 27, 186)

// 인덱스를 통해서 값을 빼올 수 있습니다
print("이름: \(person.0), 나이: \(person.1), 신장: \(person.2)")
```
튜플의 값을 읽어올 때에는 `person.0`과 같이 튜플 값의 인덱스로 값을 읽어온다.

튜플의 각 요소에 이름을 붙여주면 값을 읽어올 때 인덱스로 읽어오는 것보다 더 가독성 좋은 코드를 작성할 수 있다.
```Swift
// 튜플 요소 이름 지정
var namedPerson: (name: String, age: Int, height: Double) = ("jt", 27, 186)

print("이름: \(namedPerson.name), 나이: \(namedPerson.age), 신장: \(namedPerson.height)")
```

튜플에도 타입 별칭을 지정하여 사용할 수 있다.
```Swift
typealias PersonTuple = (name: String, age: Int, height: Double)
let jt: PersonTuple = ("jt", 27, 186)
```

### 컬렉션형
#### 1. 배열
Swift의 배열은 C언어에서 배열의 크기가 고정되는 것과 달리 배열의 크기가 바뀔 수 있다. 배열의 `insert`, `append`, `remove` 등의 메서드를 활용해 배열에 값을 삽입하거나 삭제할 수 있다.
변수에 타입을 지정할 때에는 `Array<Type>` 또는 축약형인 `[Type]`이라 표기한다.
```swift
var names: Array<String> = ["서영", "명수", "종석", "서현", "나경", "성산"]

// 위 선언과 정확히 동일한 표현입니다. [String]은 Array<String>의 축약 표현입니다.
var sameNames: [String] = ["jt", "seoyeong", "myeongsu", "jongseok"]

var emptyArray: Any = []

var sameEmptyArray: Any = Array<Any>()

var samesameEmptyArray: [Any] = [Any]()

print(emptyArray.isEmpty)

print(names.count)

print(names[1])

names[1] = "Myeongsu"

print(names[1])

//print(names[4])

print(names.first)

print(names.last)

print(names.firstIndex(of: "서영"))

names.append("명하")

names.append(contentsOf: ["태헌", "학준"])

names.insert("진태", at: 0)

names.insert(contentsOf: ["박정훈 교수님", "류기열 교수님"], at: 0)

let firstItem: String = names.removeFirst()

let lastItem: String = names.removeLast()

let indexZeroItem: String = names.remove(at: 0)

print(firstItem)

print(lastItem)

print(indexZeroItem)

print(names[1...3])
```
#### 2. 딕셔너리
딕셔너리는 키-값 쌍으로 구성된 Collection 타입이다. 딕셔너리의 값을 키를 통해 접근해 읽어올 수 있다. 딕셔너리에는 같은 키가 중복되어 사용될 수 없다.
변수에 딕셔너리 타입을 지정할 때에는  `Dictionary<Type, Type>` 또는 `[Type: Type]`으로 표기한다.
```Swift
typealias StringIntDictionary = [String: Int]

// 키는 String, 값은 Int 타입인 빈 딕셔너리를 생성합니다.
var numberForName: Dictionary<String, Int> = Dictionary<String, Int>()

// 위 선언과 같은 표현입니다. [String: Int]는 Dictionary<String, Int>의 축약 표현입니다.
var sameNumberForName: [String: Int] = [String: Int]()
var samesameNumberForName: StringIntDictionary = StringIntDictionary()

// 딕셔너리의 키와 값 타입을 정확히 명시해줬다면 [:]만으로도 빈 딕셔너리를 생성할 수 있습니다.
var sssNumberForName: [String: Int] = [:]
var numberForNameWithValue: [String: Int] = ["seoyeong": 24, "jintae": 27]

print(numberForNameWithValue.isEmpty)

print(numberForNameWithValue.count)

print(numberForNameWithValue["jintae"])

numberForNameWithValue["jongseok"] = 6

print(numberForNameWithValue["jongseok"])

numberForNameWithValue["jintae"] = 42

print(numberForNameWithValue["jintae"])

print(numberForNameWithValue.removeValue(forKey: "jintae"))

print(numberForNameWithValue["jintae", default: 0])
```
#### 3. Set
세트는 배열과 달리 값을 정렬하지 않고, 중복되는 값을 저장하지 않는 타입이다. 세트의 값을 표기할 때에는 배열과 같이 `[]`를 사용한다. Set은 축약형이 따로 존재하지 않는다.
```swift
var setNames: Set<String> = []
var sameSetNames: Set<String> = Set<String>()

setNames = ["jintae", "seoyeong", "jongseok"]

print(type(of: setNames))

print(setNames.isEmpty)

print(setNames.count)

setNames.insert("myeongsu")

print(setNames.count)

print(setNames.remove("jintae"))

let 새: Set<String> = ["비둘기", "닭", "기러기"]

let 포유류: Set<String> = ["사자", "호랑이", "곰"]

let 동물: Set<String> = 새.union(포유류)

print(새.isDisjoint(with: 포유류))

print(새.isSubset(of: 동물))

print(동물.isSuperset(of: 포유류))

print(동물.isSuperset(of: 새))
```

### 열거형
Swift에서 열거형은 C언어나 자바 등의 언어에서 `int` 타입 취급되는 것과 달리 열거형 고유의 값을 갖는다. 값을 한정짓고 싶을 때 주로 사용한다.
```swift
enum School: String, CaseIterable {
    case primary = "유치원"
    case elementary = "초등학교"
    case middle = "중학교"
    case high = "고등학교"
    case college = "대학"
    case university = "대학교"
    case graduate = "대학원"
}

enum oneLineSchool {
    case primary, elementary, middle, high, college, university, graduate
}

var highestEducationLevel: School = School.university

var sameHighestEducationLevel: School = .university

print("저의 최종학력은 \(highestEducationLevel.rawValue)입니다.")

enum WeekDays: Character {
    case mon = "월", tue = "화", wed = "수", thu = "목", fri = "금", sat = "토", sun = "일"
}

let today: WeekDays = WeekDays.fri

print("오늘은 \(today.rawValue)요일입니다.")

let primary = School(rawValue: "유치원")

print(primary)

// 4.5.3 연관 값
enum Games {
    case rockScissorsPapers(item: RockScissorsPapers)
    case baseball(number: Int)
    case nintendoSwitch
    
    enum RockScissorsPapers {
        case rock, scissors, papers
    }
}

Games.rockScissorsPapers(item: .rock)
Games.baseball(number: 3)

let allCases: [School] = School.allCases
print(allCases)

// 4.5.5 순환 열거형

indirect enum ArithmeticExpression {
    case number(Int)
    case addition(ArithmeticExpression, ArithmeticExpression)
    case multiplication(ArithmeticExpression, ArithmeticExpression)
}

let five = ArithmeticExpression.number(5)
let four = ArithmeticExpression.number(4)
let sum = ArithmeticExpression.addition(five, four)
let finalValue = ArithmeticExpression.multiplication(sum, ArithmeticExpression.number(2))

func evaluate(_ expression: ArithmeticExpression) -> Int {
    switch expression {
    case .number(let value):
        return value
    case .addition(let left, let right):
        return evaluate(left) + evaluate(right)
    case .multiplication(let left, let right):
        return evaluate(left) * evaluate(right)
    }
}

let result: Int = evaluate(finalValue)

print("(5 + 4) * 2 = \(result)")
```