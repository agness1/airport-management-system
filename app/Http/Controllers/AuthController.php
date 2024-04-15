<?php

namespace App\Http\Controllers;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

public function showRoleLists()
{
    $roles = Role::all();

    return response()->json([
        'roles' => $roles
    ]);
}

    public function signup(SignupRequest $request)
    {
        $data = $request->validated();
    /**  @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'RoleId' => $data['role']
        ]);
        $roleName = Role::find($data['role']);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token', 'roleName'));
    }

    public function login(LoginRequest $request)
    {

        $credentials = $request->validated();

        if(!Auth::attempt($credentials)) {
            return response ([
                'message' => 'Provided email address or password is incorrect'
            ]);
        }

        /**  @var \App\Models\User $user */
        $user = Auth::user();
        $role = Role::find($user->RoleId);
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token', 'role'));

    }
    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return response('', 204);
    }

}
