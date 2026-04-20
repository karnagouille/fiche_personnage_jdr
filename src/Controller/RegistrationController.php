<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegisterType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

final class RegistrationController extends AbstractController
{ #[Route(path: '/register', name: 'register')]
    public function form(Request $request, EntityManagerInterface $em, UserPasswordHasherInterface $userPasswordHasher,Security $security): Response
    {
        $user = new User();
        $form = $this->createForm(RegisterType::class,$user);
        $form->handleRequest($request);


        if($form->isSubmitted() && $form->isValid()){

        $plainPassword = $form->get('password')->getData();        
        $user->setPassword($userPasswordHasher->hashPassword($user, $plainPassword));

        $em->persist($user);
        $em->flush();

        return $security->login($user);
        }
        return $this->render('register.html.twig',[
            'form'=>$form,
        ]);
    }
}
