---
title: "TIL 2024-01-25"
description:
date: 2024-01-25
tags:
  - TIL
  - 2024년 TIL
---

# 2024/01/25

## iOS 학습

1. UICollectionViewCompositionalLayout
- https://developer.apple.com/documentation/uikit/uicollectionviewcompositionallayout

    UICollectionViewCompositionalLayout을 활용해 UICollectionView의 레이아웃을 만들어줄 때 높이가 제대로 지정되지 않는 문제가 발생하였다. 문제가 발생한 코드는 아래와 같다.
    ``` swift
        func createBasicListLayout() -> UICollectionViewLayout { 
        let itemSize = NSCollectionLayoutSize(widthDimension: fractionalWidth(1.0), heightDimension: .fractionalHeight(1.0))
        let item = NSCollectionLayoutItem(layoutSize: itemSize)
    
        let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0), heightDimension: .estimated(44))
        let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize, subitems: [item])
    
        let section = NSCollectionLayoutSection(group: group)    

        let layout = UICollectionViewCompositionalLayout(section: section)
        return layout
    }
    ```
    문제가 발생한 원인은 `let itemSize = NSCollectionLayoutSize(widthDimension: fractionalWidth(1.0), heightDimension: .fractionalHeight(1.0))` 이 코드로, heightDimension에 .fractionalHeight(1.0)을 준 것이 원인이었다.

    설령 group의 layoutSize가 잡혀있더라도 item의 size를 지정해줄 때에 height를 estimated로 사용해야 제대로 된 크기가 잡힌다는 것을 알게 되었다. (이유는 아직 제대로 모르는 상태이다.)

    코드를 아래와 같이 수정해주자 발생한 View의 크기가 제대로 안 잡히는 문제는 해결되었다.

    ``` swift
        func createBasicListLayout() -> UICollectionViewLayout { 
        let itemSize = NSCollectionLayoutSize(widthDimension: fractionalWidth(1.0), heightDimension: .estimated(44))
        let item = NSCollectionLayoutItem(layoutSize: itemSize)
    
        let groupSize = NSCollectionLayoutSize(widthDimension: .fractionalWidth(1.0), heightDimension: .estimated(44))
        let group = NSCollectionLayoutGroup.horizontal(layoutSize: groupSize, subitems: [item])
    
        let section = NSCollectionLayoutSection(group: group)    

        let layout = UICollectionViewCompositionalLayout(section: section)
        return layout
    }
    ```



2. 화면이 회전할 때 UICollectionView의 layout이 제대로 업데이트되지 않는 문제

    이 문제를 해결하기 위해 아래와 같은 코드를 작성하였다.

    ```swift
    override func viewWillTransition(
		to size: CGSize, with coordinator: UIViewControllerTransitionCoordinator
	) {
		super.viewWillTransition(to: size, with: coordinator)
		collectionView.collectionViewLayout.invalidateLayout()
	}
    ```
    - `viewWillTransition(to:with:)` 함수는 ViewController의 view의 크기가 변할 때 실행되는 함수이다. 화면이 회전할 때에도 해당 함수가 실행된다.
    - `collectionViewLayout`의 `invalidateLayout()` 메서드는 layout을 업데이트하도록 지시하는 메서드이다.

    두 함수를 활용하여 화면이 회전시 layout이 업데이트되도록 구현하였다.