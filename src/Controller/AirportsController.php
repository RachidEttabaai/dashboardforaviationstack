<?php

namespace App\Controller;

use App\Service\ApiCallService;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AirportsController extends AbstractController
{
    /**
     * Get all airports datas from aviationstack API
     * @Route("/allairports",name="allairports")
     * @Method("GET")
     * 
     * @param ApiCallService $apiCallService
     * @return JsonResponse
     */
    public function getAll(ApiCallService $apiCallService)
    {
        $apiCallService->setApiUrl("http://api.aviationstack.com/v1/airports?access_key=b930884297de709e3f1531ffda8e936a&limit=6471");
        
        $response = new JsonResponse($apiCallService->showDatasFromAPI());
        dd($apiCallService->showDatasFromAPI());
        $response->setEncodingOptions($response->getEncodingOptions()|JSON_PRETTY_PRINT);

        return $response;
        
    }
    
}