---
title: "TIL 2023-03-15"
description:
date: 2023-03-15
update: 2023-03-15
tags:
  - TIL
  - 2023년 TIL
series: "2023년 03월 TIL"
---

## 2023/03/15

### Int와 UInt
Swift에서는 정수를 표현할 때 Int 또는 UInt 타입을 사용한다. Int 타입은 양의 정수, 0, 음의 정수를 표현할 때 사용하는 타입이고, UInt 타입은 양의 정수와 0을 표현할 때 사용하는 타입이다.

Int 타입과 UInt 타입은 각각 8비트, 16비트, 32비트, 64비트의 형태가 존재하며 이를 타입으로 표기하면 Int8, Int16, Int32, Int64, UInt8, UInt16, UInt32, UInt64이다.

Int 타입은 32비트 아키텍쳐에서 Int32로, 64비트 아키텍쳐에서 Int64로 지정된다. UInt 타입도 마찬가지로 32비트 아키텍쳐에서 UInt32, 64비트 아키텍쳐에서 UInt64로 지정된다.

Swift는 타입을 엄격하게 구분하기 때문에 양의 정수만 저장하는 변수를 사용하더라도 Int형을 사용하는 것이 권장된다. UInt형 타입은 불가피하게 필요한 상황에만 사용하는 것이 좋다. 이는 Int형과 UInt형 값을 연산할 때, Int 함수에 UInt를 전달할 때와 같이 불필요한 형변환을 방지하기 위함이다.

``` swift
var integer: Int = -100
let unsignedInteger: UInt = 50

let largeError: Int = Int.max + 1 // Int의 최댓값보다 큰 값을 대입해 오류 발생
let cannotBeNegative: UInt = -5 // 음수가 될 수 없는 타입에 음수 값을 대입해 오류 발생

integer = unsignedInteger // 오류 발생! Int와 UInt는 다른 타입이기 때문
integer = Int(unsignedInteger) // 오류가 발생하지 않음. 적절한 형변환을 해주었기 때문
```

### Bool
Bool은 true(참), false(거짓)을 값으로 갖는 타입이다. 불리언 타입이라고도 부른다.
```swift
var isEditing: Bool = true
isEditing.toggle() // isEditing 변수의 값을 true-false 반전
```

### Float과 Double
Float과 Double은 정수가 아닌 실수, 즉 소수를 표현하기 위해 사용하는 부동소수 타입이다. Double은 64비트 부동소수 표현을 하고, Float은 32비트 부동소수 표현을 한다.

64비트 환경에서 Float은 6자리까지, Double은 15번째짜리까지 표현할 때 오차가 발생하지 않는다.

참고로 128.0도 프로그래밍에서는 정수가 아닌 실수로 취급된다.
```swift
var floatValue: Float = 1234567890.1

// Double은 충분히 수용할 수 있습니다.

let doubleValue: Double = 1234567890.1

print("floatValue: \(floatValue) doubleValue: \(doubleValue)")

// Float이 수용할 수 있는 범위의 수로 변경합니다.

floatValue = 123456.1
```

### Character
Character는 문자 하나를 표현할 때 사용하는 타입이다. Character형 변수에는 문장, 단어와 달리 하나의 문자만 지정할 수 있다. Character 타입의 변수에 값을 지정할 때에는 문자 앞 뒤에 큰 따옴표(")를 사용한다.
```swift
let alphabetA: Character = "A"

print(alphabetA)

let commandCharacter: Character = "❤️"

print(commandCharacter)

let 한글변수이름: Character = "ㄱ"

print("한글의 첫 자음: \(한글변수이름)")
```

### String
String은 문장, 단어와 같은 여러 문자로 이루어진 값, 문자열을 표현할 때 사용하는 타입이다. Character와 마찬가지로 값의 앞뒤에 큰 따옴표(")를 사용한다.
```swift
let name: String = "yagom"

// 이니셜라이저를 사용하여 빈 문자열을 생성할 수 있습니다.

var introduce: String = String()

// append() 메서드를 사용하여 문자열을 이어붙일 수 있습니다.
introduce.append("제 이름은")

// + 연산자를 통해서도 문자열을 이어붙일 수 있습니다.
introduce = introduce + " " + name + "입니다."

print(introduce)

// name에 해당하는 문자의 수를 셀 수 있습니다.

print("name의 글자 수: \(name.count)")

// 빈 문자열인지 확인해볼 수 있습니다.

print("introduce가 비어 있습니까?: \(introduce.isEmpty)")
```

### Any, AnyObject와 nil
Any 타입은 Swift의 모든 값을 표현할 수 있는 타입이다. AnyObject는 모든 클래스의 인스턴스를 할당할 수 있는 타입으로, Any 타입의 특징이 클래스로 한정된 타입이라 말할 수 있다.

nil은 값이 존재하지 않고 비어있음을 표현하기 위해 사용하는 키워드이다. nil은 옵셔널 타입의 변수에 지정할 수 있다. (논 옵셔널 타입에는 지정할 수 없다.)

가급적 Any와 AnyObject 타입은 사용하지 않는 것이 좋다. AnyObject는 Class에만 채용할 수 있는 Protocol을 생성할 때 사용할 수 있다.