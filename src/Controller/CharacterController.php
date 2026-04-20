<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class CharacterController extends AbstractController
{
    #[Route('/', name: 'character')]
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->render('home.html.twig', [
            'controller_name' => 'CharacterController',
            'player' => $user
        ]);
    }
}
