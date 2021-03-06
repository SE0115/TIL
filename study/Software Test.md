# Software Test

소프트웨어 테스트는 프로그램에 존재하는 오류와 결함을 검출하여 수정하고 요구사항에 부합되는지를 확인하며 소프트웨어 품질을 향상시키는 것을 목적으로 한다.

## 단위 테스트 (Unit Test)

프로그래밍의 최소 단위에 대한 테스트

주로 시스템의 단위 클래스나 함수를 대상으로 한다.

<br/>

## 통합 테스트 (Integration Test)

모듈을 통합하는 과정에서 수행되는 테스트

시스템 구성 요소를 결합하여 구성 요소간의 인터페이스와 결합 단계에서의 기능을 확인한다.

### 하향식 통합 테스트

가장 상위에 있는 모듈부터 시작하여 하위에 있는 모듈들을 점진적으로 통합하는 방식

- 깊이 우선 방식이나 너비 우선 방식을 사용한다.
- 상위 모듈을 테스트할 때 하위 모듈을 대체할 `스텁(stub)` 이 필요하다.
- 모듈이 통합될 때마다 테스트를 진행한다.
- 새로운 오류가 발행하지 않음을 보증하기 위한 **회귀 테스트**를 실시한다.

### 상향식 통합 테스트

가장 하위에 있는 모듈부터 시작하여 상위에 있는 모듈들을 점진적으로 통합하는 방식

- 하위 모듈을 `클러스터(cluster)` 로 결합한다.
- 상위 모듈에서 데이터 입출력을 확인하기 위해 더미 모듈인 `드라이버` 를 작성한다.
- 통합된 클러스터 단위로 테스트를 진행한다.
- 테스트가 완료되면 클러스터는 프로그램 구조의 상위로 이동하여 결합하고 드라이버는 실제 모듈로 대체된다.

<br/>

## 시스템 테스트 (System test)

전체 시스템에 대한 동작 테스트

단위 테스트나 통합테스트가 기능이 올바르게 수행되는지를 검증하는 것에 중점을 두는 반면, 시스템 테스트는 시스템의 기능 측면에서 뿐만 아니라, 비기능적인 요구사항도 만족되는지를 검증한다.

※ 비기능 : 사용성, 견고성, 신뢰성, 보안성, 성능

<br/>

## 인수 테스트 (Acceptance Test)

결함 찾기가 아닌 사용자 만족 여부를 테스트하는 것으로 사용자가 인수할만한 수준인지 판단하기 위한 테스트

### 알파 테스트

비공개 시범 서비스

베타 테스트용 소프트웨어를 출시하기 전 수행하는 마지막 테스트로 주로 사내 테스트 팀이 진행하는 내부 승인 테스트의 한 형태이다.

### 베타 테스트

공개 시범 서비스

하드웨어나 소프트웨어 제품을 정식 상품으로 내놓기 전에 오류가 있는지를 발견하기 위해 미리 정해진 사용자들이 직접 테스트를 진행한다.

![Untitled](https://user-images.githubusercontent.com/88129850/182071857-4e2bd9e4-b5e8-4a8e-bb03-9c8bc150c907.png)
