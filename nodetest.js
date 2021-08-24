var http = require('http');
var fs = require('fs');
var url = require('url');



var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryDate = url.parse(_url,true).query;
    console.log(queryDate.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
        
    }
    response.writeHead(200);
    var template = ` <!DOCTYPE html>
    <html>
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title></title>
    
    
      <!-- sm. 참조될 라이브러리들(css)  -->
      <link rel="stylesheet" href="css/bootstrap.css">
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <!--부트스트랩 테마 적용(cosmo 테마)-->
      <link rel="stylesheet" href="css/animate.css">
      <link rel="stylesheet" href="css/sidebars.css">
      <link rel="stylesheet" href="css/lsm.css">
      <!-- sm. 참조될 라이브러리들(css)  -->
      <style>
        @font-face {
        font-family: 'IBMPlexSansKR-Medium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Medium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        }
        body {
          font-family: 'IBMPlexSansKR-Medium';
        }
        th{
          text-align: center;
        }
        td{
          text-align: center;
    
        }
      </style>
    
    
    
    
    
    
    </head>
    
    <body>
    
    
      <main>
        <!--메인임-->
        <!--sm. 기훈이가 구성할 사이드바. 냅두면됨-->
        <!--sm. lg사이즈 이상에서의 사이드바-->
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark d-none d-lg-block" style="width: 280px;">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap" />
            </svg>
            <i class="bi bi-signpost-split" style=" color: lavender;"></i>
            <span class="fs-4">&nbsp; EIS-SYSTEM</span>
          </a>
          <hr>
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="main.html" class="nav-link">
                <svg class="bi me-2" width="16" height="16">
                  <use xlink:href="#home" />
                </svg>
                <i class="bi bi-house-door">&nbsp;</i>
                메인
              </a>
            </li>
            <li>
              <a href="produce.html" class="nav-link active">
                <svg class="bi me-2" width="16" height="16">
                  <use xlink:href="#speedometer2" />
                </svg>
                <i class="bi bi-minecart-loaded">&nbsp;</i>
                생산
              </a>
            </li>
            <li>
              <a href="sales.html" class="nav-link">
                <svg class="bi me-2" width="16" height="16">
                  <use xlink:href="#table" />
                </svg>
                <i class="bi bi-tags">&nbsp;</i>
    
                매출
              </a>
            </li>
            <li>
              <a href="quality.html" class="nav-link">
                <svg class="bi me-2" width="16" height="16">
                  <use xlink:href="#grid" />
                </svg>
                <i class="bi bi-shield">&nbsp;</i>
    
                품질
              </a>
            </li>
            <li>
              <a href="#" class="nav-link">
                <svg class="bi me-2" width="16" height="16">
                  <use xlink:href="#people-circle" />
                </svg>
                <i class="bi bi-lightbulb">&nbsp;</i>
    
                관련정보
              </a>
            </li>
          </ul>
          
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <hr>
          <div class="dropdown">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1"
              data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
              <strong>admin</strong>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
              <li><a class="dropdown-item" href="#">계정 정보</a></li>
              <li><a class="dropdown-item" href="#">설정</a></li>
              <li><a class="dropdown-item" href="#">로그아웃</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
        <!--sm. 모바일사이즈에서 등장하는 사이드바-->
        <div class="d-flex flex-column flex-shrink-0 bg-dark d-lg-none" style="width: 4.5rem;">
          <a href="#" class="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
            <i class="bi bi-signpost-split" style="font-size: 1.7rem; color: lavender;"></i>
          </a>
          <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li class="nav-item">
              <a href="#" class="nav-link  py-3 border-bottom" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                <i class="bi bi-house-door" style="font-size: 2rem;"></i>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link active py-3 border-bottom" title="Produce" data-bs-toggle="tooltip" data-bs-placement="right">
                <i class="bi bi-minecart-loaded" style="font-size: 2rem;"></i>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link py-3 border-bottom" title="Sales" data-bs-toggle="tooltip" data-bs-placement="right">
                <i class="bi bi-tags" style="font-size: 2rem;"></i>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link py-3 border-bottom" title="Quality" data-bs-toggle="tooltip" data-bs-placement="right">
                <i class="bi bi-shield" style="font-size: 2rem;"></i>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link py-3 border-bottom" title="Infomation" data-bs-toggle="tooltip" data-bs-placement="right">
                <i class="bi bi-lightbulb" style="font-size: 2rem;"></i>
              </a>
            </li>
          </ul>
          <div class="dropdown border-top">
            <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle">
            </a>
            <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      
      
    
    
        <!--sm. 기훈이가 구성할 사이드바. 냅두면됨-->
        <!--sm.이아래에서부터 작업시작하면됨 main이라는 틀 안에서 작업하는것에 주의할 것-->
    
    
    
    
    
        <!--sm. 메인 내부 작성 시작하는 컨테이너-->
        <div class="container-fluid">
          <!--sm. 네브바 시작-->
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">연도별 생산지표</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03"
                aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav me-auto">
    
    
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                      aria-haspopup="true" aria-expanded="false">연도선택</a>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#">2021년</a>
                      <a class="dropdown-item" href="#">2020년</a>
                      <a class="dropdown-item" href="#">2019년</a>
                    </div>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-sm-2" type="text" placeholder="검색">
                  <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          <!--sm. 네브바 종료-->
    
    
    
          <!--sm. 최상단 인포메이션 카드 작성 시작-->
    
          <div class="row">
    
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-60 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        총 생산액</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">$ 40,000,000</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-60 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        원가 대비 총 순익</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">$ 4,000,000</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-60 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        연 생산 계획 달성율</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">
                        <div class="progress">
                          <div class="progress-bar" role="progressbar" style="width: 70%;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                          <div class="progress-bar bg-success" role="progressbar" style="width: 30%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-primary shadow h-60 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        8월 주요 일정</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">주주총회 2021-8-30(D-8)</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
          </div>
          <!--sm. 최상단 인포메이션 카드 작성 종료-->
    
    
    
          <!--sm. 가동률 정보 차트 그리드 시작-->
          <div style="margin: 1vh; padding: 1vh;" class="card text-white bg-dark">
            <div id="theFirstHalf2" class="row animate__animated animate__pulse">
              <h3 class="text-center">2021년 라인별 지표 현황</h3>
    
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <canvas id="myChart2"></canvas>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <canvas id="myChart3"></canvas>
              </div>
              <!--sm. 설비별 가동률 조업도 무정지율 표 작성 시작-->
              <table class="table table-hover">
                <thead>
                  <tr class="table-primary"> 
                    <th scope="col"></th>
                    <th scope="col">가동률</th>
                    <th scope="col">조업도</th>
                    <th scope="col">무정지율</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-light">
                    <th scope="row">A-12</th>
                    <td>80 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">A-41</th>
                    <td>88 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">BB-03</th>
                    <td>95 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">BG-304</th>
                    <td>90 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">BG-306</th>
                    <td>86 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">BG-098</th>
                    <td>99 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">B-15</th>
                    <td>80 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">YUH-31</th>
                    <td>70 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">POP-10</th>
                    <td>89 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">KPO-01</th>
                    <td>96 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">BZO-123</th>
                    <td>95 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr class="table-light">
                    <th scope="row">BPD-12</th>
                    <td>98 %</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <!--sm. 설비별 가동률 조업도 무정지율 표 작성 끗-->
    
            </div>
            <div class="row">
              
    
            </div>
    
          </div>
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div style="margin: 0.5vh; padding: 1vh;" class="card bg-dark">
                <canvas id="myChart1"></canvas>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div style="margin: 0.5vh; padding: 1vh;" class="card bg-dark">
                <div class="row">
    
                  <div class="col-3"></div>
                  <div class="col-6">
                    <canvas id="myChart4"></canvas>
                  </div>
                  <div class="col-3"></div>
                </div>
    
              </div>
    
            </div>
    
    
    
    
          </div>
          <!--sm. 가동률 정보 차트 그리드 종료-->
    
    <!--sm. 모달창 작업 시작-->
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">A-12 라인 관련 생산지표</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
    
            <div>
              <canvas id="myChart5"></canvas>
            </div>
          </div>
    
        </div>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
          <!--이안에서 작업하면됨-->
    
      </main>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      <!-- sm. 참조될 라이브러리들(js)  -->
      <script src="js/jquery-3.6.0.min.js"></script>
      <script src="js/bootstrap.js"></script>
      <script src="js/sidebars.js"></script>
      <script src="js/chart.js"></script>
    
      <script src="js/Producechart.js"></script>
      <script src="js/ProducechartModal.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
      <!-- sm. 참조될 라이브러리들(js)  -->
    
    
    
    </body>
    
    </html>
    `;
    response.end(template);
 
});
app.listen(3000);