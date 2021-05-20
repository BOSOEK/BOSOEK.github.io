# Matplotlib
> Matplotlib은 파이썬 기반 그래프(플롯) 시각화 라이브러리이다.
> matplotlib.pyplot 모듈의 각각의 함수로 그래프를 만들고 변화를 줄수 있다.
```
# 설치 코드
pip search matplotlib
pip install matplotlib
pip install --upgrade matplotlib

# 패키지 추가
import matplotlib.pyplot as plt
%matplotlib inline # jupyter에서 Shift+Enter를 치지 않고 Run으로 실행하여 그래프를 그릴 수 있음.
```

## 목차
* ### [1. 기본 그래프](#기본-그래프)
* ### [2. 축 레이블 및 범위 설정](#축-레이블-및-범위-설정)
* ### [3. 그래프 영역 채우기](#그래프-영역-채우기)
* ### [4. 그리드 및 눈금 표시](#그리드-및-눈금-표시하기)
* ### [5. 수직선/수평선 표시](#수직선/수평선-표시)
* ### [6. 막대 그래프 그리기](#막대-그래프-그리기)
* ### [7. 산점도 그리기](#산점도-그리기)
* ### [8. 히스토그램 그리기](#히스토그램-그리기)
* ### [9. 오차막대 그리기](#오차막대-그리기)
* ### [10. 파이(원형)차트 그리기](#파이-차트-그리기)

***

## 기본 그래프
* ### pyplot.show()
    > 그렸던 그래프들 출력하는 함수
* ### pyplot.plot() 
    > 선 또는 마커 그래프 그리기에 사용되는 함수로 리스트를 인수로 받는다.
    * y 값 : ```[1, 2, 3, 4]```처럼 리스트가 한개인 경우 y값이라고 가정후 x값을 0부터 1씩 커지게 자동으로 만들어 낸다.
    * x, y 값 : ```[1, 2, 3, 4,], [2,4,6,8]```처럼 리스트가 두개면 각각 x, y로 그래프로 나타내준다.
    * 두개의 그래프 : 두개 이상의 리스트들은 새로운 그래프로 그려진다.(한 그래프에 여러 곡선들 제작 가능)
    ![image](https://user-images.githubusercontent.com/68007145/118938613-cf080700-b989-11eb-9281-3afe2c769293.png)
    
    __plot() 함수에 매개변수에 'bo'(파란 원형마커) 형식으로 색과 마커 방식을 지정할 수 있다__
    ### Color
    > 'b'처럼 일반 지정도 되고 color='green' 처럼 키워드로 지정해도 된다. 단, 키워드 지정에서는 css 색상과 Hex code도 사용할 수 있다.
    * #### 'b' : blue
    * #### 'g' : green
    * #### 'r' : red
    * #### 'c' : cyan
    * #### 'm' : magenta
    * #### 'y' : yellow
    * #### 'k' : black
    * #### 'w' : white
    ### Line Styles
    > '-'처럼 일반 지정도 되고 linestyle='-'처럼 키워드로 지정해도 된다.
    * #### '-' : 실선 스타일
    * #### '--' : 파선 스타일
    * #### '-.' : 점-선 스타일
    * #### ':' : 점선 스타일
    ### Markers
    > 'o'처럼 일반 지정도 되고 marker='o'처럼 키워드로 지정해도 된다.
    * #### '.' : 포인트 
    * #### ',' : 픽셀 
    * #### 'o' : 원형
    * #### 'v' : 아래쪽 삼각형
    * #### '^' : 위쪽 삼각형
    * #### '<' : 왼쪽 삼각형
    * #### '>' : 오른쪽 삼각형
    * #### '1' : 아래쪽 삼각별
    * #### '2' : 위쪽 삼각별
    * #### '3' : 왼쪽 삼각별
    * #### '4' : 오른쪽 삼각별
    * #### 's' : 사각형
    * #### 'p' : 오각형
    * #### '*' : 별
    * #### 'h' : 육각형 1
    * #### 'H' : 육각형 2
    * #### '+' : + 마크
    * #### 'x' : x 마크
    * #### 'D' : 다이아몬드
    * #### 'd' : 앏은 다이아몬드
    * #### '|' : | 마크
    * #### '_' : _ 마크
* ### title()
    > 그래프의 제목 지정(타이틀을 여러개 지정할 수도 있다)
    * 매개변수로 타이틀 글을 준다
    * loc = 'right/left/center' : 타이틀을 오른쪽(right) 위, 왼쪽(left) 위, 가운데(center) 위에 나타나게 한다
    * pad : 타이틀과 그래프와의 관계를 설정한다.
    * fontdict : fontsize(포인트 단위 숫자나 'smaller', 'x-large' 등의 상대적인 설정)와 fontweight('normal', 'bold', 'heavy', 'light', 'ultrabold', 'ultralight' 설정 가능)를 딕셔너리 형태로 받는다
    ```
    plt.title('Sample graph', loc='right', pad=20)
    title_font = {
        'fontsize': 16,
        'fontweight': 'bold'
    }
    plt.title('Sample graph', fontdict=title_font, loc='left', pad=20)
    ```
    ![image](https://user-images.githubusercontent.com/68007145/118962326-38931000-b9a0-11eb-8e74-8f567e551327.png)
    
## 축 레이블 및 범위 설정
* ### xlabel() 
    > 그래프에서 x축에 대한 레이블 표시
    * 표시할 레이블을 인수로 받는다
* ### ylabel() 
    > 그래프에서 y축에 대한 레이블 표시
    * 표시할 레이블을 인수로 받는다
* ### axis()
    > x, y축이 표시되는 범위를 지정
    * 매개변수 : (xmin, xmax, ymin, ymax)
    __입력값이 없으면 데이터에 맞게 자동으로 범위를 지정함__
## 그래프 영역 채우기
* ### fill_between()
    > X-Label 그래프의 특정 영역을 채워서 강조
    * X 배열 : X 레이블의 어떤 지점을 그릴것인지 지정
    * Y 배열 : Y 레이블의 어떤 지점까지 그릴것인지 지정
    * color : 색 지정
    * alpha : 투명도(1이 최대)
    ```
    x = [1, 2, 3, 4]
    y = [1, 4, 9, 16]
    plt.plot(x, y)
    plt.fill_between(x[1:3], y[1:3], alpha=0.5)
    ```
    > (x[1], y[1]), (x[2], y[2]), (x[1], 0), (x[2], 0)을 잇는 영역이 채워진다    
    ![image](https://user-images.githubusercontent.com/68007145/118950473-311a3980-b995-11eb-878f-5624431058c8.png)

* ### fill_betweenx()
    > X-Label 그래프의 특정 영역을 채워서 강조
    * Y 배열 : Y 레이블의 어떤 지점까지 그릴것인지 지정
    * X 배열 : X 레이블의 어떤 지점을 그릴것인지 지정
    * color : 색 지정
    * alpha : 투명도(1이 최대)
    ```
    plt.plot(x, y)
    plt.fill_between(y[2:4]), x[2:4], alpha=0.5)
    ```
    > (x[2], y[2]), (x[3], y[3]), (0, y[2]), (0, y[3])을 잇는 영역이 채워진다      
    ![image](https://user-images.githubusercontent.com/68007145/118950897-94a46700-b995-11eb-9dff-180f293b77b1.png)
* ### 두 그래프 사이 영역 채우기
    > 두 그래프 사이를 채워서 강조
    * 영역을 채울 X값 지정
    * 영역을 채울 두 그래프의 Y값 지정
    * 나머지는 동일
    ```
    x = [1, 2, 3, 4]
    y1 = [1, 4, 9, 16]
    y2 = [1, 2, 4, 8]

    plt.fill_between(x[1:3], y1[1:3], y2[1:3])
    # fill_betweenx도 가능
    ```
    > (x[1], y[1]), (x[1], y[2]), (x[2], y[1]), (x[2], y[2]) 사이 영역을 채운다     
    ![image](https://user-images.githubusercontent.com/68007145/118951549-23b17f00-b996-11eb-8e27-423992274f43.png)
* ### fill()
    > 임의의 영역을 채워서 강조
    * 영역을 그릴 4가지 지점의 X, Y좌표 지정
    ```
    plt.fill([1.9, 1.9, 3.1, 3.1], [2, 5, 11, 8])
    ```    
    ![image](https://user-images.githubusercontent.com/68007145/118951957-7db24480-b996-11eb-8499-76ec25abc172.png)
## 그리드 및 눈금 표시하기
* ### grid() 
    > 그래프에 격자 표시
    * True : True로 설정시 그리드 표시됨(X, Y). default는 False.
    * axis = 'both/x/y' : 그리드 방향 지정. default는 both
    * color : 색 지정
    * alpha : 투명도
    * linestyle : 선 스타일
    * which = 'major/minor/both' : 주눈금, 보조눈금 표시
* ### xticks()
    > X축에 틱(그래프의 축에 간격을 구분하는 표시 눈금)
    * 리스트나 넘파이 배열을 입력시 해당 위치에 눈금 & 숫자 레이블 표시
    * labels = ['1번', '2번' ...] : 눈금 레이블을 명시적으로 지정 가능
    > lebels 파라미터 대신 튜블로 지정해도 가능 
* ### yticks()
    > Y축에 틱(그래프의 축에 간격을 구분하는 표시 눈금)
    * 리스트나 넘파이 배열을 입력시 해당 위치에 눈금 & 숫자 레이블 표시
    * labels = ['1번', '2번' ...] : 눈금 레이블을 명시적으로 지정 가능
    > lebels 파라미터 대신 튜블로 지정해도 가능
* ### tick_params()
    > 눈금 스타일 지정
    * axis : 설정 적용 축 지정(X, Y, both)
    * direction : 눈금 안/밖 표시 지정(in:안, out:밖, inout:둘다)
    * length : 눈금이 길이
    * pad : 눈금과 레이블과의 거리
    * labelsize : 레이블의 크기 지정
    * labelcolor : 레이블의 색상 지정
    * top = True : 눈금이 위에 표시됨(default:False)
    * bottom = True : 눈금이 아래에 표시됨(default:False)
    * left = True : 눈금이 왼쪽에 표시됨(default:False)
    * right = True : 눈금이 오른쪽에 표시됨(default:False)
    * width : 눈금의 너비 지정
    * color : 눈금의 색상 지정
## 수직선/수평선 표시
* ### axhline()
    > 그래프 특정 y(가로)값에 수평선 표시
    * 첫번째 인자 : y값으로서 수평선의 위치
    * 두번째 인자 : xmin -> 0(왼쪽 끝)에서 1(오른쪽 끝)사이의 값을 넣는다
    * 세번째 인자 : xmax -> 0(왼쪽 끝)에서 1(오른쪽 끝)사이의 값을 넣는다
    > xmin과 xmax에 선이 생기는 것
    * color : 색
    * linestyle : 선 스타일
    * linewidth = 선 두께(수 지정)
* ### axvline()
    > 그래프 특정 x(세로)값에 수직선 표시
    * 첫번째 인자 : x값으로서 수평선의 위치
    * 두번째 인자 : xmin -> 0(아래쪽 끝)에서 1(위쪽 끝)사이의 값을 넣는다
    * 세번째 인자 : xmax -> 0(아래쪽 끝)에서 1(위쪽 끝)사이의 값을 넣는다
    > xmin과 xmax에 선이 생기는 것
    * color : 색
    * linestyle : 선 스타일
    * linewidth = 선 두께(수 지정)
    ```
    a = np.arange(0, 2, 0.2)
    plt.plot(a, a, 'bo')
    plt.plot(a, a**2, color='#e35f62', marker='*', linewidth=2)
    plt.plot(a, a**3, color='springgreen', marker='^', markersize=9)
    plt.xticks(np.arange(0, 2, 0.2), labels=['Jan', '', 'Feb', '', 'Mar', '', 'May', '', 'June', '', 'July'])
    plt.yticks(np.arange(0, 7), ('0', '1GB', '2GB', '3GB', '4GB', '5GB', '6GB'))
    plt.axhline(1, 0, 0.55, color='gray', linestyle='--', linewidth='1')
    plt.axvline(1, 0, 0.16, color='lightgray', linestyle=':', linewidth='2')
    plt.axhline(5.83, 0, 0.95, color='gray', linestyle='--', linewidth='1')
    plt.axvline(1.8, 0, 0.95, color='lightgray', linestyle=':', linewidth='2')
    plt.show()
    ```   
    ![image](https://user-images.githubusercontent.com/68007145/118963728-b4da2300-b9a1-11eb-9a9a-64e30d2f73c9.png)
* ### hlines()
    > Y를 따라 수평선 표시
    * 첫번째 인자 : Y 좌표
    * 두번째 인자 : xmin -> 수평선 시작 지점
    * 세번째 인자 : xmax -> 수평선 끝나는 지점
    > 점(xmin, y)에서 점(xmax, y)를 따라 수평선 표시
    * color : 색
    * linewidth : 선두께

* ### vlines()
    > X를 따라 수평선 표시
    * 첫번째 인자 : X 좌표
    * 두번째 인자 : ymin -> 수평선 시작 지점
    * 세번째 인자 : ymax -> 수평선 끝나는 지점
    > 점(x, ymin)에서 점(x, ymax)를 따라 수평선 표시
    * color : 색
    * linewidth : 선두께
    ```  
    plt.hlines(4, 1, 1.6, colors='pink', linewidth=3)
    plt.vlines(1, 1, 4, colors='pink', linewidth=3) 
    ```    
    ![image](https://user-images.githubusercontent.com/68007145/118964444-785af700-b9a2-11eb-9238-095c84cbb879.png)
## 막대 그래프 그리기
* ### bar()
    > 그래프 개수와 값을 리스트 형태로 받아 막대 그래프로 출력
    * 첫번째 인자 : 넘파이 배열로 막대 그래프 개수 지정(총 3개면 [0, 1, 2])
    * 두번째 인자 : 넘파이 배열에 해당하는 리스트 입력
    * width : 막대의 너비(default : 0.8)
    * align : 틱과 막대의 위치 조절(default : center, edge로 설정시 막대 왼쪽에 틱이 표시됨)
    * color : 막대의 색
    * edgecolor : 막대의 테두리 색을 지정(css타입 가능)
    * linewidth : 테두리 두께 지정
    * tick_label : 리스트 형태로 지정시 틱에 리스트 문자열을 순서대로 나타낼 수 있다.
    * log = True : Y축 로그 스케일로 표시
    ```
    x = np.arange(3)
    years = ['2017', '2018', '2019']
    values = [100, 400, 900]
    plt.bar(x, values, width=0.6, align='edge', color="springgreen",
            edgecolor="gray", linewidth=3, tick_label=years, log=True)
    ```   
    ![image](https://user-images.githubusercontent.com/68007145/118965609-d3d9b480-b9a3-11eb-96e2-63372e5a3fe6.png)
* ### barh()
    > 수평 막대 그래프 출력
    * 첫번째 인자 : 넘파이 배열로 막대 그래프 개수 지정(총 3개면 [0, 1, 2])
    * 두번째 인자 : 넘파이 배열에 해당하는 리스트 입력
    * height : 막대의 높이(default : 0.8)
    * align : 틱과 막대의 위치 조절(default : center, edge로 설정시 막대 아래쪽에 틱이 표시됨)
    * color : 막대의 색
    * edgecolor : 막대의 테두리 색을 지정(css타입 가능)
    * linewidth : 테두리 두께 지정
    * tick_label : 리스트 형태로 지정시 틱에 리스트 문자열을 순서대로 나타낼 수 있다.
    * log = True : X축 로그 스케일로 표시
    ```
    y = np.arange(3)
    years = ['2017', '2018', '2019']
    values = [100, 400, 900]

    plt.barh(y, values, height=-0.6, align='edge', color="springgreen",
            edgecolor="gray", linewidth=3, tick_label=years, log=False)
    ```   
    ![image](https://user-images.githubusercontent.com/68007145/118965906-22874e80-b9a4-11eb-90da-b8a8445b0095.png)
## 산점도 그리기
> __산점도__ 는 두 변수 상관 관계를 직교 좌표계의 평면에 데이터를 점으로 표현하는 그래프
* ### scatter()
    > 산점도 출력
    ### 2차원 산점도 그리기
    * X : X위치
    * Y : Y위치
    * s = '크기' : 마커의 면적
    * c = '색' : 마커의 색깔
    * alpha = 값 : 투명도
    > 각각의 인자들은 리스트 형태로 여러개 지정하여 한번에 여러개의 마커들을 만들 수도 있다.
    ### 3차원 산점도 그리기
    > 3차원 그래프를 위해서는 ```from mpl_toolkits.mplot3d import Axes3D``` 추가(맷플로팁 3.1 이상부터는 자동으로 포함되있음)
    * rcParams로 figure의 사이즈 설정(figure란 그래프가 들어있는 객체)
    ```
    plt.rcParams["figure.figsize"] = (6, 6)
    ```
    * 3D axes를 위해 add_subplot()에 3D를 입력해준다
    ```
    ax = fig.add_subplot(111, projection='3d')
    ```
    > 매개인자들
    * X : X좌표
    * Y : Y좌표
    * Z : Z좌표
    * c ='색' : 색깔
    * marker='마크' : 마크 형태
    * s=값 : 크기
    * cmap = '색' : 맵 색깔           
    ![image](https://user-images.githubusercontent.com/68007145/118970084-cbd04380-b9a8-11eb-860f-68bfe6dc4a49.png)
## 히스토그램 그리기
> __히스토그램__ 은 도수분포표를 그래프로 나타낸 것으로, 가로는 계급, 세로는 도수를 나타낸다
* ### hist()
    * 첫번째 인자 : 리스트 형태로 값 입력
    * bins = 값 : 몇 개의 영역으로 쪼갤지 설정
    * density = True : 밀도 함수가 되어 막대 아래 면적이 1이된다.
    * alpha : 투명도
    * histtype = 'step/stepfilled' : step은 막대 내부가 비어있고, stepfiled는 막대 내부가 채워진다.
    ```
    a = 2.0 * np.random.randn(10000) + 1.0
    b = np.random.standard_normal(10000)
    c = 20.0 * np.random.rand(5000) - 10.0

    plt.hist(a, bins=100, density=True, alpha=0.7, histtype='step')
    plt.hist(b, bins=50, density=True, alpha=0.5, histtype='stepfilled')
    plt.hist(c, bins=100, density=True, alpha=0.9, histtype='step')
    plt.show()
    ```   
    ![image](https://user-images.githubusercontent.com/68007145/118970655-6d579500-b9a9-11eb-8a5a-84ed525977b0.png)
## 오차막대 그리기
> 데이터의 편차를 표시하기 위한 그래프 형태
* ### errorbar()
    > 에러바 그래프를 그릴 수 있다.
    * x : X값
    * y : Y값
    * yerr = yerr값 : 데이터 편차 리스트
    * uplims = True/False : 상한가 기호 표시
    * lolims = True/False : 하한가 기호 표시
    ```
    x = [1, 2, 3, 4]
    y = [1, 4, 9, 16]
    yerr = [2.3, 3.1, 1.7, 2.5]

    plt.errorbar(x, y, yerr=yerr)
    ```       
    ![image](https://user-images.githubusercontent.com/68007145/118971263-2a49f180-b9aa-11eb-8d85-d4d628e230e4.png)

    > 비대칭인 편차를 표시하려면 (2, N) 형태의 값들을 입력.
    * 첫번째 튜플 : 아래 방향 편차
    * 두번째 튜플 : 위 방향 편차
    ```
    x = [1, 2, 3, 4]
    y = [1, 4, 9, 16]
    yerr = [(2.3, 3.1, 1.7, 2.5), (1.1, 2.5, 0.9, 3.9)]

    plt.errorbar(x, y, yerr=yerr)
    ```
    ![image](https://user-images.githubusercontent.com/68007145/118971402-57969f80-b9aa-11eb-88a6-f18d87405953.png)
## 파이 차트 그리기
> 원그래프는 범주별 구성 비율을 원형으로 표현한 그래프이다.
* ### pie()
    * 첫번째 인자 : 각 영역의 비율 리스트
    * labels = 리스트 : 각 영역의 이름 리스트
    * autopct = '%.1f%%' : 표시될 숫자의 형식
    * startangle = 값 : 시작 각도(default : 0도) 지정
    * counterclock = False : 시계 방향 순서로 부채꼴 영역이 표시됨
    * explode = 리스트 : 부채꼴이 파이 차트 중심에서 벗어나는 정도를 설정(각각의 영역에 따라 리스트로 지정)
    * shadow = True : 그림자 표시
    * colors = 리스트 : 각 영역당 색상 지정(리스트로)
    * wedgeprops = 딕셔너리 : 부채꼴 영역의 스타일 설정(딕셔너리의 'width'-너비, 'edgecolor'- 테두리 색깔, 'linewidth'- 테두리 선의 너비)
    ```
    ratio = [34, 32, 16, 18]
    labels = ['Apple', 'Banana', 'Melon', 'Grapes']
    colors = ['#ff9999', '#ffc000', '#8fd9b6', '#d395d0']
    wedgeprops={'width': 0.7, 'edgecolor': 'w', 'linewidth': 5}

    plt.pie(ratio, labels=labels, autopct='%.1f%%', startangle=260, counterclock=False, colors=colors, wedgeprops=wedgeprops)
    plt.show()
    ```  
    ![image](https://user-images.githubusercontent.com/68007145/118972808-ee179080-b9ab-11eb-9ed3-e409211cb310.png)