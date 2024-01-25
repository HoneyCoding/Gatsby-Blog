---
title: "TIL 2024-01-24"
description:
date: 2024-01-24
update: 2023-01-24
tags:
  - TIL
  - 2024년 TIL
---

# 2024/01/24

## iOS 학습

오랜만에 TIL을 작성한다. TIL 내용은 꾸준히 작성할 수 있도록 짧게나마 작성해보려 한다.

1. UICollectionViewCompositionalLayout
- https://developer.apple.com/documentation/uikit/uicollectionviewcompositionallayout
    
    UICollectionViewCompositionalLayout은 Apple에서 UICollectionView에 Layout을 적용할 때 사용할 수 있도록 만들어준 클래스이다. iOS 기준 13.0 버전 이상부터 사용이 가능하며, 코드는 아래와 같이 작성한다.

    ``` swift
        func createBasicListLayout() -> UICollectionViewLayout { 
        let itemSize = NSCollectionLayoutSize(widthDimension: fractionalWidth(1.0), heightDimension: .fractionalHeight(1.0))
        let item = NSCollectionLayoutItem(layoutSize: itemSize)
    
        let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0), heightDimension: .absolute(44))    
        let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize, subitems: [item])
    
        let section = NSCollectionLayoutSection(group: group)    


        let layout = UICollectionViewCompositionalLayout(section: section)
        return layout
    }
    ```
    UICollectionViewCompositionalLayout 인스턴스 하나를 생성하기 위해 `NSCollectionLayoutSize`, `NSCollectionLayoutItem`, `NSCollectionLayoutGroup`, `NSCollectionLayoutSection` 등의 클래스의 인스턴스를 생성해주어야 한다. 해당 내용에 대해서 더 깊이 있게는 다음에 공부할 것이다.

2. @IBSegueAction Attribute
- https://developer.apple.com/documentation/Xcode-Release-Notes/xcode-11-release-notes

    @IBSegueAction Attribute는 XCode 11에서 추가된 Attribute로, 화면이 전환될 때 segue가 생성하는 화면(ViewController)을 원하는 생성자로 생성하고 싶을 때 사용한다. 
    
    - @IBSegueAction Attribute를 사용하지 않을 경우 화면(ViewController)을 생성할 때 `init?(coder:)` 이니셜라이저로 사용된다.
    - @IBSegueAction Attribute를 사용할 경우 아래와 같이 코드를 작성한다.

        ```swift
        @IBSegueAction func makeCustomVC(
            _ coder: NSCoder, sender: Any?
        ) -> CustomViewController? {
            let item = self.item
            return CustomViewController(item: item, coder: coder)
        }
        ```

        위와 같이 코드를 작성해주면 화면 전환 시 내가 원하는 생성자인 `init(item:coder:)`를 호출하여 CustomViewController를 생성할 수 있다.

    - @IBSegueAction Attribute를 사용해 작성한 함수는 Storyboard의 Segue와 연결되어야 한다. Storyboard와 연결하지 않으면 화면 전환시 사용되지 않는다.
    - @IBSegueAction Attribute를 사용하지 못할 때에는 `prepare(for:sender:)` 메서드를 구현하여 Optional Property에 값을 전달하였으나, @IBSegueAction Attribute가 생기면서 새로운 화면에서 Optional Property 없이 값을 전달받을 수 있게 되었다.

3. Required Initializer, Failable Initializer
    - Required Initializer는 Subclass에서 생성자를 만들 경우, 꼭 override해서 구현해야 하는 Initializer이다. `required init() {}`과 같이 작성한다.
    - Failable Initializer는 인스턴스를 생성할 때 실패할 수 있는 이니셜라이저이다. Failable Initializer를 통해 인스턴스를 생성하면 값은 옵셔널 타입이 되며, 생성에 실패하면 nil이 된다.
    - Failable Initializer에는 `init?()`, `init!()`과 같이 `?`, `!`를 붙이는 이니셜라이저 2종류가 존재한다.
    - Failable Initializer에서 생성을 실패할 경우 `return nil`이라고 작성하면 된다. 이 때, Initializer에는 return 타입이 없음에도 `return nil`이라고 작성하는 점을 기억하자.
    - `init!()`을 통해 생성된 인스턴스는 IUO(Implicitly Unwrapped Optional) 타입을 갖는다.
